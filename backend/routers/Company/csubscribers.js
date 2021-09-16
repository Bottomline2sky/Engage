const Csubscription = require('../../models/compaccount/csubscription')
const express = require("express")
const { ObjectId } = require('mongodb');
const router = new express.Router()
const dauth = require("../../authentication/dauth")
const cauth = require('../../authentication/cauth')
const cGeneral = require('../../models/comps')
const Dsubscription = require('../../models/devaccount/dsubscription')

router.get('/newSubscriber/:id/addSubscription',dauth,async (req, res) => {
          try{
                const getIdt = req.params.id;
                  const getId = ObjectId(getIdt)
                let  Comp = await Csubscription.findOne({owner : getId});
                  const CompG = await cGeneral.findOne({_id: getId});

                    if(!Comp) {
                         res.status(404).send({message: "sorry we have not find any company like this"});
                    }
                    Comp.devIds.push({
                          devId: req.user._id,
                          devName:  req.user.name
                    })
                const Dev = await Dsubscription.findOne({owner: req.user._id});
                    Dev.compIds.push({
                         compId: getId,
                         compName:  CompG.name
                    })

              await Comp.save();
                     await Dev.save();
                    res.status(201).send({message: "Subscription Added Successfully"})
          }
           catch (e) {
             console.log(e);
              res.status(500).send({message: e.toString()});
           }
})

router.get('/comp/getAllSubscribers',cauth,async (req, res) => {
     try{
                const allSubscribers = await  req.user.populate('csubscriptions').execPopulate();
                     res.status(201).send(allSubscribers.devIds);
     }
     catch (e) {
        res.status(500).send({message: e.toString()})
     }
})

module.exports = router

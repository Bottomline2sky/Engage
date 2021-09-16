const Dsubscription = require("../../models/devaccount/dsubscription")
const dauth = require("../../authentication/dauth")
const express = require("express")
const router = new express.Router()


  router.get('/dev/getAllSubscriptions',dauth,async (req, res) => {
        try{
                const allComp = await  req.user.populate('mySubscription').execPopulate();
                         res.status(201).send(req.user.mySubscription[0].compIds);
        }
        catch (e) {
            console.log(e)
             res.status(500).send({message: e.toString()})
        }
  })



module.exports = router

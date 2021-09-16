const express= require('express')
const router= new express.Router()
const  Dev= require('../models/devs')
const dauth=  require('../authentication/dauth')
const bcrypt= require('bcryptjs')
const DevProfile = require('../models/devaccount/devprofile')
const Dsubscription = require('../models/devaccount/dsubscription')
const cdauth= require('../authentication/cdauth')
const Notification= require('../models/notification/notifi')
const ContactList = require('../models/messaging/contactlist')

 router.post('/devg/signup',async(req,res)=>{
      try {
          const dev= await new Dev(req.body)
              dev.password = await bcrypt.hash(dev.password,8);
          await dev.save()
            const newProfile =  new DevProfile({name : req.body.name, owner: dev._id});

           const dsubscription = new Dsubscription({
                compIds : [],
                owner:   dev._id
           })
          const contactList =new ContactList({
                    contacts: [],
                     owner: dev._id
        })
         await dsubscription.save();
             await  contactList.save();
          await newProfile.save();
         res.status(201).send()
      }
      catch(e){
          res.status(500).send(e)
      }
 })

  router.post('/devg/login',async(req,res)=>{
      try{
    const dev= await Dev.findByCredentials(req.body.email,req.body.password)

           if(!dev){
                 res.status(406).send('Either password Or Email is not matched')
           }
              const logToken= await dev.generateToken()
               const validity = Date.now()+7200000;
               const uId = dev._id;
          res.status(201).send({uId,logToken,validity});
    }
    catch(e) {
          res.status(400).send({error : e.toString()})
    }
  })

router.get('/devs/logout',dauth,async(req,res)=>{
    try{
        req.user.tokens= req.user.tokens.filter((token)=>{
            return  token.token !== req.token
        })
        req.user.save()
        res.status(200).send()
    }
    catch(e){
        res.status(401).send()
    }
})



   router.get('/devs/logoutall',dauth,async(req,res)=>{
    try{
        req.user.tokens=[]
        console.log('wiped out')
        await req.user.save()
        res.status(200).send()
    }
    catch(e){
        res.status(500).send()
    }
})





module.exports= router

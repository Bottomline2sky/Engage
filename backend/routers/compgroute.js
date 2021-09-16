const Comp = require('../models/comps')
  const express= require('express')
 const router=  new express.Router()
const bcrypt = require('bcryptjs')
   const cauth= require('../authentication/cauth')
 const CompProfile= require('../models/compaccount/compprofile')
const Csubscribers = require('../models/compaccount/csubscription')
router.post('/compg/signup',async(req,res)=>{
    try {
        const comp = await new Comp(req.body)
        const password = await bcrypt.hash(comp.password,8);
          comp.password = password;
        await comp.save()
        const compprofile = await new CompProfile({
            name: req.body.name,
            location: req.body.location,
             owner: comp._id
        })
      const csubscribers = new Csubscribers({
        devIds: [],
        owner : comp._id
      })
        await  csubscribers.save();
       await compprofile.save();
        res.status(201).send()
    }
    catch(e){
       console.log(e)
        res.status(500).send()
    }
})
router.post('/compg/login',async(req,res)=>{
    try{
    const comp= await Comp.findByCredentials(req.body.email,req.body.password)
    if(!comp){
            res.status(406).send('Either password Or Email is not matched')
        }
        const logToken= await comp.generateToken()
      const validity = Date.now()+7200000;
        res.status(201).send({comp,logToken, validity})
    }
    catch(e) {
        res.status(400).send(e)
    }
})



  router.get('/comps/logout',cauth,async(req,res)=>{
    try{
        req.user.tokens= req.user.tokens.filter((token)=>{
            return  token.token !== req.token
        })
      await  req.user.save()
        res.status(200).send()
    }
    catch(e){
        res.status(401).send()
    }
})


router.get('/comps/logoutall',cauth,async(req,res)=>{
    try{
        req.user.tokens=[]
        console.log('wiped out')
        await req.user.save()
        res.status(200).send()
    }
    catch(e){
          res.status(500).send({error: 'could  not logout from all devices'})
        }
})

  router.get('/getAllCompanies',async (req,res)=>{
           try {
             let allComp = await Comp.find();
             let resForm = [];
             allComp.forEach(res => {
               resForm.push(res);
             })
             res.status(201).send(resForm);
           }
           catch(e) {
                res.status(500).send({error: e.toString()})
           }
  })

     router.get('/search/:name/company' , async(req,res)=>{
                   try{
                         let pName = req.params.name;
                     let allComp = await Comp.find({name:{ $regex: pName, $options: "i" }})
                         let resComp = [];
                                for(let i=0;i<allComp.length;i++) {
                                        resComp.push({compName: allComp[i].name , compId : allComp[i]._id});
                                }
                        res.status(200).send(resComp);
                   }
                   catch(e) {
                        res.status(500).send({error: e.toString()})
                   }
     })


  module.exports=  router

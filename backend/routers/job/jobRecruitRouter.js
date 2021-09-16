const jobRecruit = require('../../models/jobs/jobRecruit')
const express = require('express')
const router = new  express.Router();
 const cauth =  require('../../authentication/cauth')
const dauth = require('../../authentication/dauth')



  router.get('/apply/:id',dauth,async (req,res)=>{
     try {
       const id = req.params.id
       const userId = req.user._id
         const getJob = await jobRecruit.findOne({jid: id});
           getJob.applicants.push({applicant: userId, name: req.user.name});
            await  getJob.save();
              res.status(201).send({messge: "Applied SUccessfully"})
     }
     catch(e) {
         res.status(500).send({error:  e.toString()});
     }
  })

 router.get('/comp/allJobs',cauth,async (req,res)=>{
         try{
                   await  req.user.populate('cjobsrecruit').execPopulate();
                      const allJobs = req.user.cjobsrecruit;
                      res.status(200).send(allJobs);

         }
         catch(e) {
              res.status(500).send({message: e.toString()});
         }
   })

 router.get('/comp/:id/jobDetails',cauth,async (req,res)=>{
          try {
                    const jid = req.params.id;
                    const job = await jobRecruit.findOne({jid, owner: req.user._id});
                    res.status(200).send(job);
          }
          catch(e) {
              console.log(e);
               res.status(500).send({message: e.toString()});
          }
 })

module.exports = router

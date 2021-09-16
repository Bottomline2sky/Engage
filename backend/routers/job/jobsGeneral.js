const Jobs = require('../../models/jobs/job')
const cauth = require('../../authentication/cauth')
const express= require('express')
const router= new express.Router()
const JobRecruit = require('../../models/jobs/jobRecruit')


router.post('/compjob/publish',cauth,async (req,res)=>{
  try {
    const job = await new Jobs(req.body) ;
     job.owner = req.user._id;
      job.jid = job._id.toString();
          const jRecruit = await new JobRecruit({
                 jid: job._id,
              owner: req.user._id
          })
    await jRecruit.save();
    await job.save();
    res.status(200).send({message : 'Publish Successfully'});
  }catch(e){
    res.status(500).send({error: e.toString()})
  }
})

 router.get('/fetchAll/ongoingJobs',async (req,res)=>{
         try{
            const currentTime = Date.now();
             const allJobs = await Jobs.find();
            const newJobs = allJobs.filter(res=>{
                        if(res.jdeadline>currentTime) {
                           return res;
                        }
                 })
            res.status(201).send(newJobs);

         }
         catch(e) {
        res.status(500).send({message: "Internal Errors !!!"});
         }
 })







module.exports =  router


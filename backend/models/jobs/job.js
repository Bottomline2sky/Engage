const mongoose= require('mongoose')
   require('../../db/connect')
 const Dev= require ('../devaccount/devprofile')
 const time= require('../../src/utils')
const fetch = require('node-fetch');
const ComProfile= require('../compaccount/compprofile')


   // Basically here owner mean Company who Creates Job
// In deadline we will say to give no of daysafter we will  match it from unix timestamp
// Owner fir fetching the all post of all type companies by search bar
  const jobSchema= new mongoose.Schema({
         jid: {
              type: String,
              required: true,
           trim: true
         },
          jtitle: {
                type: String,
                required: true,
               trim: true
          },
       jabout: {
               type: String,
               required: true,
             trim: true,
       },
          jdeadline: {
               type: String,
            required: true,
             trim: true
          },
       location: {
              type: String,
          required: true,
           trim: true
          },
        qualification : {
              type: String,
              required: true,
             trim: true
        },
       skills : [{
         type: Number,
         required: true,
         trim: true
       }
          ],
       eligibility: {
              type: String,
               trim: true
       },
     compensation: {
              type: String,
               trim: true
     },
       owner: {
               type: mongoose.Schema.Types.ObjectID,
               ref: 'Comp'
       }
  },{
       timestamps: true
  })

jobSchema.methods.checkAndSave = async function(id){
                const job= this
             const isContains= job.applicants.filter((exist)=> exist.dev.toString()==id)
                if(isContains.length !== 0) {

                     throw new Error('You had applied already for this post')
                }
                 job.applicants.push({dev: id})
          await  job.save()
         return job
     }



     jobSchema.methods.checkDeadline= async function() {
         const job = this
         const status= true
         const  city=  await ComProfile.findOne({ owner : job.owner })
             const cityfetch= city.address || 'Delhi'
         const promise= new Promise((accept,reject)=>{
             time(cityfetch,accept)
         })
         await  promise.then( (data) => {
             if (data.wether.localtime < job.selectedRange.start.toISOString().split('T')[0]) {
                             throw new Error('Registraion is not start yet')
                           }
                 else if (data.wether.localtime > job.selectedRange.end.toISOString().split('T')[0]) {
                            throw new Error('Registration has close now')
                     }
                })

             // await time('varanasi', (data) => {
             //       if (data.wether.localtime < job.selectedRange.start.toISOString().split('T')[0]) {
             //             status.error= 'Registration is not Start yet'
             //
             //
             //       } else if (data.wether.localtime > job.selectedRange.end.toISOString().split('T')[0]) {
             //              status.error= 'Registration has closed'
             //           console.log(status)
             //       }
             //   })
           return status
             }













const  Jobs=  mongoose.model('Job',jobSchema)
module.exports= Jobs








require('../../db/connect')
const mongoose = require('mongoose')




const jobRecruitSchema = new mongoose.Schema({
          jid: {
               type: mongoose.Schema.Types.ObjectId,
               required: true
          },
          applicants: [{
              applicant: {
                   type: mongoose.Schema.Types.ObjectId,
                   required: true
              },
             name: {
              type: String,
               required: true
             }
          }],
        selected: [{
               applicant : {
                   type: mongoose.Schema.Types.ObjectId,
                   required: true
               },
             name: {
                   type:String,
                    required: true
             }
          }],
    owner: {
           type: mongoose.Schema.Types.ObjectId,
           required: true
    }
})


const jobRecruit =  mongoose.model('JobRecruit', jobRecruitSchema)
 module.exports = jobRecruit

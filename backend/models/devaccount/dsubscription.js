require('../../db/connect')
const mongoose = require('mongoose')



const dsubsSchema = new mongoose.Schema({
   compIds: [{
       compId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Comp'
       },
    compName:  {
          type: String,
          required: true,
           trim: true
     }
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: 'Dev'
  }
})

const DSubscription = mongoose.model('Dsubscription' , dsubsSchema)
module.exports = DSubscription

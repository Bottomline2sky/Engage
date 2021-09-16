require('../../db/connect')
const mongoose = require('mongoose')
const Comp = require('../comps')


const csubsSchema = new mongoose.Schema({
              devIds : [{
                    devId: {
                      type: mongoose.Schema.Types.ObjectId,
                      required: true,
                      ref: 'Dev'
                    },
                 devName :{
                        type: String,
                     required: true,
                     trim: true
                 }
              }],
       owner: {
                 type: mongoose.Schema.Types.ObjectID,
                 required: true,
                ref: 'Comp'
       }
})

const CSubscription = mongoose.model('Csubscription' , csubsSchema)
module.exports = CSubscription

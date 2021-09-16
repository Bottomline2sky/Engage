require('../../db/connect')
const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
           room: {
              type: mongoose.Types.ObjectId,
               required: true
           },
           sender: {
               type: mongoose.Types.ObjectId,
              required: true
           } ,
         message: {
               type: String,
                 required: true
         },
       time:{
                type: Number,
                 required: true
           },
         self:{
               type: Boolean,
                default: false
           }
})


const Chats  = mongoose.model('Chat', chatSchema);
module.exports = Chats


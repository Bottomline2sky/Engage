require('../../db/connect')
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
               contacts: [
                 {
                     uId: {
                      type: mongoose.Types.ObjectId,
                       required: true
                     },
                    uName: {
                         type: String,
                          required: true
                    }
                 }
               ],
           owner: {
                   type: mongoose.Types.ObjectId,
                   required: true
           }
})


const ContactList = new mongoose.model('Contact',contactSchema)
module.exports = ContactList

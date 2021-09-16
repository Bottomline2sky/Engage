require('../../db/connect')
 const mongoose= require('mongoose')
  const Comp= require('../comps')

const comppSchema= new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: true
  },
  about: {
    type: String,
    trim: true,

  },
  owner: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: 'Comp'
  },
  image: {
    type: String
  }
})





 const CompProfile=  mongoose.model('Compprofile',comppSchema)
 module.exports= CompProfile






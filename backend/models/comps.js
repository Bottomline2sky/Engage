const mongoose= require('mongoose')
require('../db/connect')
const validator= require('validator')
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')
 const Job= require('../models/jobs/job')
const Feed= require('../models/feeds/feed')


const  compSchema= new mongoose.Schema({
     name: {
           type: String,
           required: true,
           trim: true,
     },
     location:{
           type: String,
           required: true,
           trim: true,
     },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        validate(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password Should not contain any String like password')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

compSchema.statics.findByCredentials= async(email,pass)=>{
    const comp= await Comps.findOne({email})
    if(! comp) {
        throw new Error('No Match Found Please Sign Up')
    }
    const isMatched= await  bcrypt.compare(pass,comp.password)
    if(! isMatched) {
        throw new Error(' Password is Defected')
    }
    return comp
}

compSchema.methods.generateToken= async function (){
    const comp= this
    const compToken=await jwt.sign({_id: this._id.toString()},'iamcompany',{expiresIn: '2 Days'})
    comp.tokens.push({token: compToken})
    await comp.save()
    return compToken
}

compSchema.methods.toJSON=  function(){
    const comp=this
    const compObject=  comp.toObject()
    delete compObject.tokens
    delete compObject.password
    return compObject
}

  compSchema.virtual('jobs',{
         ref: 'Job',
         localField:'_id',
          foreignField: 'owner'
  })

compSchema.virtual('feeds',{
      ref: 'Feed',
      localField: '_id',
      foreignField: 'owner'
})

compSchema.virtual('csubscriptions',{
     ref: 'Csubscription',
  localField: '_id',
    foreignField: 'owner'
})

compSchema.virtual('cjobsrecruit', {
       ref: 'Job',
       localField: '_id',
       foreignField: 'owner'
})




const Comps= mongoose.model('Comp',compSchema)
module.exports= Comps

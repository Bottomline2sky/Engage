 require('../../db/connect')
  const mongoose= require('mongoose')

 const feedSchema =  new mongoose.Schema({
         message: {
               type: String,
               trim: true
          },
      subscribers:[{
             subscriber:{
                  type: mongoose.Schema.Types.ObjectID
             }
      }],
      image:{
               type: String,
         },
      likes:{
               type: Number,
          default: 0
      },
     owner:{
              type: mongoose.Schema.Types.ObjectID,
              required: true
     }
 },{
      timestamps: true
 })



 const  Feed=  mongoose.model('Feed',feedSchema)


 module.exports= Feed





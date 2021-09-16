 require('../../db/connect')
 const mongoose= require('mongoose')

//  Developer Subscriber  means follower
  const devpSchema= new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
      default: 'Every man is special and i contains that'
    },
    skills: [
      {
         skill: {
            type: String,
            trim: true
         },
         value: {
           type: String,
            trim: true
         }
      }],
       education: [
         {
            year: {
                type: String,
                 trim: true,
            },
           school :{
                  type: String,
                  trim: true,
           }
         }
       ],
      experience: [
        {
           year : {
               type: String,
               trim: true
           },
          company: {
               type: String,
               trim: true
          }
        }
      ],
    owner: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Dev',
      required: true,
      unique: true
    },
    image: {
      type: String,
    },
  },
    {
    timestamps: true
  })

  devpSchema.virtual('jobs',{
         ref:  'Job',
         localField: '_id',
          foreignField: 'audiences.audience'
  })


 const Devprofile = mongoose.model('Devprofile',devpSchema)

  module.exports= Devprofile

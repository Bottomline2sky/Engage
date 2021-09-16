const mongoose= require('mongoose')
   mongoose.connect("mongodb+srv://toLocal:izV0nq2lDFtz0vHC@cluster0.wpaee.mongodb.net/engageData?retryWrites=true&w=majority",{
         useNewUrlParser: true,
         useCreateIndex: true,
        useFindAndModify: true
   }).then((succ)=>{
         console.log('Connected')
   }).catch((e)=>{
      console.log('e')
})



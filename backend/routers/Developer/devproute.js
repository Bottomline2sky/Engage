const express= require('express')
const  Devprofile= require('../../models/devaccount/devprofile')
 const dauth= require('../../authentication/dauth')
const cdauth= require('../../authentication/cdauth')
 const  router= new express.Router()
  const multer= require('multer')
 const sharp= require('sharp')
const path = require('path')
 const fs = require('fs')


 // If Exist please redirect to  Static Field server will sent a error
   router.post('/devprofile/create',dauth,async(req,res)=>{
        try {
            const devprofile = await new Devprofile({
                name: req.body.name,
                about: req.body.about,
                 skills: req.body.skills,
                 owner: req.user._id
            })
             await devprofile.save()
            console.log(req.body.name,req.body.about,req.body.skills,req.user._id)
             res.status(202).send()
        }
        catch(e){
              res.status(404).send()
        }
   })


const choose = {
  'image/jpeg' : '.jpg',
  'image/jpg' : '.jpg',
  'application/pdf': '.pdf',
  'text/csv': '.xlx'
}
const chooseDest = {
  'image/jpeg' : 'files/images',
  'image/jpg' : 'files/images',
  'application/pdf' : 'files/pdfs',
  'text/csv' : 'files/pdfs'
}



    let storage1 = multer.diskStorage({
            destination: function (req,file,cb) {
                  cb(null,req.imagePath);

            },
             filename:  function(req,file,cb){
                  const fileName=   'pimage'+ choose[file.mimetype];
                    cb(null,fileName);
             }
    })
  const upload = multer({storage: storage1});

    const imagePath=(async(req,res,next)=>{
         try {
             const imagepath = 'files/dev/' + req.user._id.toString() ;
                 if(! fs.existsSync(imagepath)) {
                   fs.mkdirSync(imagepath);
                 }
                req.imagePath = imagepath;
              next()
         }
         catch (e) {
              console.log(e);
         }
    })


  router.post('/devprofile/create/image',dauth,imagePath,upload.single('profilepic'),
    async (req,res)=>{
               const devprofile= await Devprofile.findOne({owner: req.user._id})
                  devprofile.image= 'http://localhost:3001/dev/pimage/'+ (req.user._id).toString() + '/pimage.jpg'
               await devprofile.save()
        res.status(201).send({image : devprofile.image});
  },(error,req,res,next)=>{
       res.status(400).send({error: error.message})
  })
router.use('/dev/pimage',express.static(path.join('files/dev')));



 // Any one which is authenticate can see image
 router.get('/devprofile/:id/avatar',cdauth,async(req,res)=>{
       try {
           const devId = req.params.id
           const devprofile = await Devprofile.findOne({owner: devId})
            if(!devprofile || ! devprofile.avatar) {
                  return res.status(400).send('Hey there are no content for you')
            }
           res.status(200).send(devprofile.avatar)
       }
       catch(e){
               res.status(400).send(e)
       }
 })

   router.delete('/devprofile/finish/avatar',dauth,async(req,res)=>{
       try {
           const devprofile = await Devprofile.findOne({owner: req.user._id})
          if(! devprofile.avatar) {
               return res.status(404).send('already you have not profile pic')
          }
            devprofile.avatar= undefined
             await  devprofile.save()
            res.status(200).send()
       }
       catch(e){
            res.status(400).send(e)
       }
   })

// Please take These Router to Redirect whether you saved profile or not
   router.get('/devprofile/read',dauth,async(req,res)=>{
          try{
                const devprofile= await Devprofile.findOne({owner: req.user._id})
                     if(!devprofile){
                          // Please take help this message to say that make your profile first by first router
                          return res.status(400).send('Please set your profile first then come')
                     }
                        const devTrench =    devprofile.toObject()
                      delete devTrench.avatar
                    res.status(200).send(devTrench)
          }
           catch(e){
               res.status(400).send(e)
           }
    })

// This Area is for Who can see your profile but can not edit and can not see sensitive and confidental  info

         router.get('/devprofile/:id/read',cdauth,async (req,res)=>{
                        const devId=  req.params.id
        try {
            const devprofile =await  Devprofile.findOne({owner: devId})
            if (!devprofile) {
                res.send(new Error('User not found'))
            }
            const publicProfile = devprofile.toObject()
            delete publicProfile.owner
            delete publicProfile.avatar
            delete publicProfile.timestamps
            res.status(200).send(publicProfile)
        }
          catch(e){
                             res.status(400).send(e)
          }
         })

// Update User Profile Option

 router.post('/devproute/update',dauth,async (req,res)=>{
     const updateWant= ['name','about','education','skills','experience']
     const updateReceived=  Object.keys(req.body)
     const isValid=  updateReceived.every((update)=>updateWant.includes(update))
     if(! isValid) {
         return res.status(400).send('Please send request for proper updative fields')
     }
     try{
         const   devprofile= await  Devprofile.findOne({owner: req.user._id})
         updateReceived.forEach((update)=>{
             devprofile[update]=  req.body[update]
         })
         await devprofile.save()
         res.status(200).send(devprofile)
     }
     catch(e){
         res.status(404).send(e)
     }
 })

// Follow me
    router.get('/devproute/:id/subscribe',dauth,async (req,res)=>{
    const  devId=  req.params.id
    try {
        const  devProfile = await Devprofile.findOne({owner: devId})
        if (! devProfile) {
            return res.status(404).send({error: 'No match found'})
        }

        const check= devProfile.subscribers.filter((sub)=> sub.subscriber.toString() == req.user._id)
        if(check.length !==0) {
            throw new Error('You have Subscribed earlier')
        }
        devProfile.subscribers.push({subscriber: req.user._id})
        // Field for furue

        await devProfile.save()
        res.status(200).send()
    }

    catch(e){
        res.status(404).send({error: e.toString()})
    }
})


  const storage = multer.diskStorage({
        destination: function (req,file,cb) {
              cb(null,"files")
        }
  })








module.exports = router

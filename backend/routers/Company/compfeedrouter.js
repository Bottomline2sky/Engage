const Feed= require('../../models/feeds/feed')
 const cauth =  require('../../authentication/cauth')
const dauth= require('../../authentication/dauth')
const express= require('express')
  const router= new express.Router()
   const Comp= require('../../models/compaccount/compprofile')
  const CompM = require('../../models/comps')
const multer= require('multer')
 const sharp= require('sharp')
const fs = require('fs')
const path = require('path')
const choose = {
  'image/jpeg' : '.jpg',
  'image/jpg' : '.jpg',
  'application/pdf': '.pdf',
  'text/csv': '.xlx'
}




const storage=   multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.imagePath);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now()
    const fileName = timestamp + choose[file.mimetype];
      req.fname  =  fileName
    cb(null, fileName);
  },
})
   const upload = multer({
     // limits: {
     //   fileSize: 2000000
     // },
       storage: storage,
     fileFilter(req,file,cb){
        if(! file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            return cb(new Error('Please Upload image in format of jpeg or jpg or png'))
        }
        cb(undefined,true)
    }
   })

const imagePath=(async(req,res,next)=>{
  try {
    let imagepath = 'files/comp/' + req.user._id.toString() ;
    if(! fs.existsSync(imagepath)) {
      fs.mkdirSync(imagepath);
    }
      imagepath += '/posts'
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

// Any one which is authenticate can see image

 router.post('/compfeed/post',cauth,imagePath,upload.single('post'),async(req,res)=>{
          try{

              const feed = new Feed({
                  message: req.body.message,
                  owner: req.user._id,
           })
          feed.image =  'http://localhost:3001/comp/postImage/'+ (req.user._id).toString() + '/posts/' + req.fname;
               await feed.save()
            await req.user.populate({
              path: 'feeds',
              options: {
                sort :{
                  createdAt: 1
                }
              }
            }).execPopulate()
            const posts= req.user.feeds

              res.status(200).send(posts)

       }
       catch(e){
                 res.status(404).send({error: e.toString()})
       }
 },(error,req,res,next)=>{
     res.status(400).send({error: error.message})
 })
 router.use('/comp/postImage',express.static(path.join('files/comp')));

router.get('/compfeed/getPosts',cauth,async (req,res)=>{
              try{
                await req.user.populate({
                       path: 'feeds',
                      options: {
                            sort :{
                                   createdAt: 1
                            }
                      }
                  }).execPopulate()
                  const posts= req.user.feeds
                  if( ! posts){
                       return res.status(200).send({ message: 'You have not posts anything yet'})
                  }
                  res.status(200).send(posts)
              }
              catch(e){
                   res.status(404).send({ error : e.toString() })
              }
  })
  router.delete('/compfeed/:id/remove',cauth,async (req,res)=>{
                   try{
                        const id= req.params.id
                         const  deletePost= await Feed.findOneAndDelete({ _id: id, owner: req.user._id })

                       if(! deletePost){
                             res.status(404).send({ warn: 'No such Post Available'})
                       }
                        res.status(200).send()
                   }
                   catch(e){
                         res.status(500).send({error : e.toString()})
                   }
  })

   router.get('/compfeed/:cid/getPosts' ,dauth,async (req, res) => {
       const cid = req.params.cid;
          try {

            const comp = await CompM.findById(cid);
            if (!comp) {
              res.status(404).send({message: "no fompany found"});
              return;
            }
            await comp.populate({
              path: 'feeds',
              options: {
                sort :{
                  createdAt: 1
                }
              }
            }).execPopulate()

              res.status(200).send(comp.feeds);

          }
           catch (e) {
               console.log(e);
                res.status(500).send({message:  e.toString()});
           }

   } )



 module.exports= router

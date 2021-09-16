 const  http=  require('http')
 const app= require('./src/app')
 const cors= require('cors')
 const port= process.env.PORT ||  3001
 const server= http.createServer(app)
 const mongodb= require('mongodb')
 require('./db/connect')
 const  socketio= require('socket.io')
 const io= socketio(server)
 const cdauth =  require('./authentication/cdauth')
const Notification=  require('./models/notification/notifi')
 const Dev= require('./models/devs')
 const Comp= require('./models/comps')
 const CompProfile= require('./models/compaccount/compprofile')
 const chatAuth= require('./authentication/chatAuth')
 const  onlineUtility =  require('./utils/online')
 const Chats = require('./models/messaging/chatStorage')
const {
    generateMessage,
    generateLocationMessage
} = require('./src/utils/messages')
 const socketAuth= require('socketio-auth')
  const {  addUser,
      removeUser,
      getUser,
      getUsersInRoom
  }   = require('./src/utils/users')





 //
 // app.use('',(req,res)=>{
 //   console.log("get");
 //   res.status(200).send({message: "successfull handshake"});
 // })
 let count =0;

   io.on('connection',(socket)=>{

          socket.on('online',(uid, callback)=>{
             onlineUtility.addUser(uid);
               socket.join(uid)
              callback("User Add Successfully");
          })

             socket.on('message',({room,message, sender})=>{
                    const time = Date.now();
                   const  chatObj = {sender,room,message,time};
                          const  chat = new Chats(chatObj);
                              const chats = new Chats({sender: room,room: sender,message,time,self: true});
                         chat.save().then(res=> {
                             return chats.save();
                         }).then(res=>{
                            io.to(sender).emit('message',{sender: room,message,time,self: true});
                           io.to(room).emit('message',{sender,message,time,self: false});

                         }).catch(error=>{
                                 console.log(error)
                         })
             })

        console.log(socket.id)
          console.log("this is our setup " + (count))
          socket.emit('display',count)

          socket.on('increment',()=>{
               count++;
               io.emit('display',count)
          })

      socket.on('disconnect',(reason)=>{
           console.log("disconenct " + reason)
      })
   })


 //
 //     const changeStream =  Notification.watch([{$project: {fullDocument: 1, operationType: 1}}])
 //        io.on('connection', (socket) => {
 //             socket.on('join', (options, callback) => {
 //                 const {error, user} = addUser({id: socket.id, ...options})
 //                 if (error) {
 //                    // return callback(error)
 //                 }
 //                 socket.join(user.room)
 //                 changeStream.on("change", function (change) {
 //                        if(change.fullDocument.subscribers &&  change.fullDocument.owner.toString() === user.room ) {
 //                             for( var subscriber  of  change.fullDocument.subscribers) {
 //                                 io.to(subscriber.subscriber.toString()).emit('message', generateMessage(change.fullDocument.head, change.fullDocument.body))
 //                             }
 //                        }
 //                 })
 //                 // callback()
 //             })
 //         })
 //
 //
 // const jwt = require('jsonwebtoken')
 //
 // io.use(function(socket, next){
 //     if (socket.handshake.query && socket.handshake.query.token){
 //         jwt.verify(socket.handshake.query.token, 'iamdeveloper', function(err, decoded) {
 //             if (err) return next(new Error('Authentication error'));
 //               const id=  decoded._id
 //             socket.id = id
 //             next();
 //         });
 //     }
 //     else {
 //         next(new Error('Authentication error Could not find you'));
 //     }
 // })
 //     .on('connection', function(socket) {
 //         // Connection now authenticated to receive further events
 //
 //         socket.on('joinmyself', function(options) {
 //             io.emit('message', message);
 //         });
 //     });








  server.listen(port,()=>{
        console.log(`Server is listening on port ${port}`)
  })

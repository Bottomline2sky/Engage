const Chats = require('../../models/messaging/chatStorage')
const express = require('express')
const router = new express.Router()
const dauth = require('../../authentication/dauth')


 router.get('/dev/getAllChats', dauth, async (req, res) => {
                    try{
                 await  req.user.populate('chats').execPopulate();
                   const allChats = req.user.chats;
                   res.status(200).send(allChats);
                      }
                      catch(e) {
                        console.log(e);
                        res.status(500).send({message: e.toString()})
                    }
 })


module.exports = router

const express = require('express')
const router = new express.Router()
const ContactList = require('../../models/messaging/contactlist')
const dauth = require('../../authentication/dauth')
const chatUtility = require('../../utils/online')
router.get('/getList/contactList',dauth,async (req,res)=>{
              try {
                const user = req.user;
                const findUser = await ContactList.findOne({owner: req.user._id})
                const contacts = findUser.contacts;
                const nContacts = [];
                contacts.forEach(val => {
                     const onlineJoin =   chatUtility.findUser(val.uId.toString());

                  if (onlineJoin) {
                    nContacts.push({
                      contact: val,
                      status: true
                    })
                  } else {
                    nContacts.push({
                        contact: val,
                        status: false
                      }
                    );
                  }
                })
                res.status(201).send(nContacts);
              }
              catch (e) {
                   res.status(500).send({message: e.toString()});
                }
})



router.post('/addList/contactList',dauth,async (req,res)=> {
                try {
                  const userToAdd = req.body;
                  const target = await ContactList.findOne({owner: req.user._id});
                     target.contacts.push(userToAdd);
                       await target.save();
                     res.status(200).send({message: "Added Successfully"})
                }
                catch (e) {

                    res.status(500).send({message: e.toString()});
                }
})


module.exports = router


// What next create the new contact list at the time of these user creation

const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/login', async (req, res) => { 
    try {
    console.log("hi");
    const user = await User.login(req.body.username,req.body.password);
    console.log(user);
    res.send( {...user, password: undefined } );
    } catch(error) {
    res.status(401).send({message: error.message});
    } 
   })  

    //add register method here:
   .post('/register', async (req, res) => {
    try {
      const user = await User.register(req.body);
      console.log(user)
      res.send({...user, password: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  //delete method
  .delete('/delete', async (req, res) => {
    try {
      await User.deleteUser(req.body.userId);
      res.send({success: "We'll miss you...:("});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  //edit method
  .put('/edit', async (req, res) => {
    try {
      const user = await User.editUser(req.body);
      console.log(user)
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })



module.exports = router;
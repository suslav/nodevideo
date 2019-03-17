'use strict'
const express=require('express');
var  router=express.Router();
const passport=require('passport');
router.get('/',(req,res)=>{
    res.send('send the default file ');
});
router.get('/login',(req,res)=>{
    res.send('respond with autheri');
});
//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
})
);
//callback route for the google to redirect to\
// router.get('/google/redirect',passport.authenticat('google'),(req,res)=>{
//    res.send('called');
// });
router.get('google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('uou')
})
router.get('/logout',(req,res)=>{
    res.send('logout');
});

module.exports=router;


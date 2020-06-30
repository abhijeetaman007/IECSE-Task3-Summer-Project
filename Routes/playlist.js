const express=require('express')
const router=express()
const playlist=require('../Models/playlist')

//To add a playlist
router.post('/add', async (req,res)=>{
    const myplaylist =new playlist({
        CreatedBy:req.body.createdby,
        Songs:req.body.songs,
        Title:req.body.songs

    })
 try{
    const savedplaylist= await myplaylist.save();
    res.status(200).json(myplaylist);
 }
 catch(err){
    res.json({message: err});
 }
});


module.exports=router;
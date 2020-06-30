const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const songroute =require('./Routes/songs')
const playlistroute=require('./Routes/playlist')


app.use(bodyparser.json())

//Connection to Database:MongoDB
mongoose.connect("mongodb://localhost:27017/songsdb",{ useUnifiedTopology: true , useNewUrlParser: true },(error)=>{
    if(!error)
    console.log("Sucessfully connected to Mongo db")
    else
    console.log("Error connecting to Mongo db")
})

app.get("/",(req,res)=>{
    res.send("<h1>Home Page<h1>")
})

//Middleware for song
app.use('/songs',songroute)

//Middleware for playlist
app.use('/playlist',playlistroute)



// // app.post("/addsong",(req,res)=>{
// //     const song= new songs({
// //     Title: req.body.title,
// //     Artist: req.body.artist,
// //     Genre: req.body.genre,
// //     Album: req.body.album,
// //     });
// //     song.save()
// //     .then( data =>{
// //         res.json(data)
// //     })
// //     .catch(err =>{
// //         res.json({message: err})
// //     })
// // })

// //To add Song
// app.post('/addsong', async (req,res)=>{
//     const song =new songs({
//          Title: req.body.title,
//          Artist: req.body.artist,
//          Genre: req.body.genre,
//          Album: req.body.album,
//     })
//  try{
//     const savedsong= await song.save();
//     res.status(200).json(savedsong);
//  }
//  catch(err){
//     res.json({message: err});
//  }
// });

// //To get all songs
// app.get('/view/allsongs',async (req,res)=>{
//     try{
//         const viewsongs = await songs.find();
//         //res.json(viewsongs)
//         res.send(viewsongs)
//     }
//     catch(error){
//         res.json({message:err})
//     }
// })

// //To get a song using id
// app.get('/view/:songid',async(req,res)=>{
//     try{
//         const viewsong = await songs.findById(req.params.songid) 
//         res.json(viewsong)
//     }
//     catch(error){
//         res.send(error)
//     }
// })

// //To delete a song
// app.delete('/delete/:songid',async (req,res)=>{
//     try{
//     const deltedsong=await songs.remove({_id:req.params.songid})
//     res.json(deltedsong)
//     }
//     catch(error){
//         res.json({message:error})
//     }
// })

// //To update a song
// app.patch('/update/:songid',async (req,res)=>{
//     try{
//         const updatedsong= await songs.updateMany(
//             {_id:req.params.songid},
//             {$set:{
//                 Title:req.body.title,
//                 Artist:req.body.artist,
//                 Genre:req.body.genre,
//                 Album:req.body.album,
//             },
//             //$set:{Artist:req.body.artist},
//             //$set:{Genre:req.body.genre},
//             //$set:{Album:req.body.album},
//         })
//         res.status(200).json(updatedsong)
//     }
//     catch(error){
//         res.json({message: error})
//     }
// })




//Listening at port:4000
 app.listen(4000,()=>{
   console.log("Server is running at port 4000")
})


const mongoose=require('mongoose')

const playlistSchema=mongoose.Schema({
    CreatedBy:{
        type:String,
        require:true
    },
    Songs:Array,
    Title:String
})

module.export=mongoose.model('playlist',playlistSchema)
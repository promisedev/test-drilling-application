import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    topic:{type:String, required:true},
    videoUrl:{type:String,required:true},
    course:{type:String,required:true}
})

export default mongoose.model('video', VideoSchema)
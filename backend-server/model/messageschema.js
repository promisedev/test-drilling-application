import mongoose from "mongoose";


const UserMessage = new mongoose.Schema({
    sender:{type:String, required:true},
    time:{type:String, required:true},
    message:{type:String, required:true}
}
);

export default mongoose.model("message", UserMessage)
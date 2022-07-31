import mongoose from "mongoose";


const UserSubject = new mongoose.Schema({
    subject:{type:String, required:true},
    selected:{type:Boolean, required:true},
    topics:{type:Number, required:true},
}
);

export default mongoose.model("subject", UserSubject)
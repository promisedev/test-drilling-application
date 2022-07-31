import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  first_name:{type:String, required:true} ,
  last_name:{type:String, required:true} ,
  password:{type:String, required:true},
  date_of_birth:{type:String, required:true},
  email:{type:String, required:true} 
  ,
course: [
    {
      subject: {type:String, required:true},
      selected: {type:Boolean, required:true},
      no_completedtopics: {type:Number, default:0},
      completed_topics: {type:Array, default:[]},
      topics: {type:Number}
    }],
gender: {type:String, required:true},
  state: {type:String, required:true},
  country: {type:String, required:true},
  refresh_token:{type:String, default:""},
  sub_token:{type:String, default:""},
  sub_plan:{type:String, default:""},
  plan_expiry:{type:String, default:""},
  issubscribed:{type:Boolean, default:false},
 roles:{type:Array, default:["user"]}
  
}
);

export default mongoose.model("User", UserSchema)


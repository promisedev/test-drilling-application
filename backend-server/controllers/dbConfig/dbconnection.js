import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Db_connect =  async ()=>{
   try {
  await mongoose.connect(process.env.DB_URL,
{ useNewUrlParser: true, useUnifiedTopology: true,
   useCreateIndex:true
   }) 
   } catch (error) { console.error(error);} 
   } 

export default Db_connect;
 
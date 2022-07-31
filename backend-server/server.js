// importing all modules
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
//import {hash, compare} from 'bcryptjs'
import cors from 'cors'
import Pusher from 'pusher'
import routesRequest from './controllers/routes.js'
import Db_connect from './controllers/dbConfig/dbconnection.js'
import Auth from './controllers/authorization.js'
import Dashboard from './controllers/dashboardCtr.js'
import ConfirmPayment from './controllers/confirmpayment.js'
dotenv.config()

// db config---------------------------------------------
Db_connect()

// app config-------------------------------------------
const port = process.env.PORT || 8001

const pusher = new Pusher({
  appId: "1441192",
  key: "740a322764743822fe48",
  secret: "f78794c6343d417f2a8e",
  cluster: "eu",
  useTLS: true
});

  
const db = mongoose.connection;
db.once("open", async()=>{
const messagecollection = await db.collection("messages")
const stream = messagecollection.watch()

stream.on("change", (change)=>{
   //console.log(change)
if(change.operationType === 'insert'){
   const messagebody = change.fullDocument;
   pusher.trigger("messages", "inserted", {
   sender:messagebody.sender,
   time:messagebody.time,   
  message: messagebody.message 
});
}
else{console.log("fail to trigger pusher")}

})

})





// middleware-----------------------------------------------------
 const Server = express()
 Server.use(express.json())
 Server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
 }))
Server.use(cookieParser()) 


// api routes------------------------------------------ 
Server.get('/', (req,res)=>res.status(200).send('my first api calls')
)
Server.use('/api/v1/request', routesRequest)
Server.post('/api/v1/payment',ConfirmPayment)
   
Server.use(Auth)
Server.get('/api/v1/request/dashboard/:id',Dashboard)

// listener-------------------------------------------------
 mongoose.connection.once('open', ()=>{ 
       console.log('database is connected');
    Server.listen(port, ()=>console.log(`Server is listening on port ${port}`))  
            
})  
 
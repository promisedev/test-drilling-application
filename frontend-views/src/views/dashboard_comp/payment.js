import { useEffect, useState } from "react"
import { useGlobalContext } from "../../controller/context_api"
import Init from '../init_loading'
import axios from '../axios2'
import { useNavigate } from "react-router-dom"

const Payment = ()=>{
const{isload,setisload,loginfo}=useGlobalContext()
const history = useNavigate()

const queryParams = new URLSearchParams(window.location.search)
const status = queryParams.get("status")
const tx_ref = queryParams.get("tx_ref")
const transaction_id = queryParams.get("transaction_id")

useEffect( async()=> {
 try {
  setisload(true)
// settx_ref(queryParams.get("tx_ref"))
//let  headers = {authorization: `Bearer ${loginfo.token}`}
    await axios.post('/payment',{
    p_status:status,
    tx_ref:tx_ref,
    transaction_id:transaction_id
},
//{headers:headers}
).then((res)=>{
setisload(false)
//console.log(res)
history(`/dashboard?message=${res.data.response.data.status}`)
})
.catch((err)=>{
    console.log(err);
    setisload(false)
})
} catch (error) {
   console.log(error) 
}

},[])

//console.log(status,tx_ref,transaction_id)

    return(

        <div className='secure_pay'>
         {isload&&<section className='log_loading'><Init/></section>}


        </div>
    )

}

export default Payment
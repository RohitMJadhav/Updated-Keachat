import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Axios from "axios";

import React from "react"
const AuthContext = createContext()

export default AuthContext;

export const AuthProvider=({children})=>{

    
     let [authTokens,setAuthTokens]=useState(()=>localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")):null )
     let [user,setUser]=useState(()=>localStorage.getItem("user_info")?jwt_decode(localStorage.getItem("user_info")):null)
     let [loading,setLoading]=useState(true)

   let history=useHistory()

   let loginUser=async (data)=>{
 
     console.log("form submitted")
    let response=await fetch(`${process.env.REACT_APP_API_URL}auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
let result=await response.json()
console.log("result:",response)

if(response.status===200){ 
    setAuthTokens(result)
    setUser(jwt_decode(result.access_token,{header:true}))
    localStorage.setItem("user_info",JSON.stringify(result))
    history.push("/dashboard")
}
else{
    alert("something went wrong")
}
}



let logoutUser=()=>{
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem("user_info")
    history.push("/login")
}


// const logoutUser = () => {
    
//     let role = JSON.parse(localStorage.getItem("user_info")).userinfo.role;
//     console.log(role,"hi this is role")
//     if (role == "Agent") {
//       var data = {
//         user_id: JSON.parse(localStorage.getItem("user_info")).userinfo
//           .agent_id.$oid,
//         role: JSON.parse(localStorage.getItem("user_info")).userinfo.role,
//       };
//     } else {
//       var data = {
//         user_id: JSON.parse(localStorage.getItem("user_info")).userinfo._id
//           .$oid,
//         role: JSON.parse(localStorage.getItem("user_info")).userinfo.role,
//       };
//     }

//     Axios.post(process.env.REACT_APP_API_URL + "auth/logout", data, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization:
//           "Bearer " +
//           JSON.parse(localStorage.getItem("user_info")).access_token,
//       },
//     })
//    .then((response)=>{ 
//     if(response.status!==200){ 
//         setAuthTokens(null)
//         setUser(null)
//         localStorage.removeItem("user_info")
//         history.push("/login")
//     }
//    })
   
//   };

let updateToken=async()=>{
    console.log("*******")
    console.log("update token called")
    console.log("*******")
    let response=await fetch(`${process.env.REACT_APP_API_URL}auth/refresh`,{
        method:"POST",
        body:JSON.stringify({"refresh":authTokens?.refresh_token}),
        headers:{
            "Content-Type":"application/json",
             "Accept": "application/json",


            //  "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).refresh_token
        },
       
    })
let result=await response.json() 
console.log(response)
console.log("*****")
console.log("updated token result called:",result)
console.log("*****")
if(response.status===200){
    setAuthTokens(result)
    setUser(jwt_decode(result.access_token),{header:true})
    localStorage.setItem("user_info",JSON.stringify(result))
}

else{
  logoutUser()
}


if(loading){
    setLoading(false)
}

}
   
    let contextData={
    user:user,
    authTokens:authTokens,
    loginUser:loginUser,
    logoutUser:logoutUser
    }

    useEffect(()=>{

if(loading){
    updateToken()
}

 let fourMinutes=1000*60*4
 let interval= setInterval(()=>{
    if(authTokens){
        updateToken()
    }
   },fourMinutes)
   return ()=>clearInterval(interval)
    },[authTokens,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading? null : children}
        </AuthContext.Provider>
    )
}
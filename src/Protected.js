import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


 function Protected(props) {
    let Cmp=props.Cmp
    let history=useHistory();
    
    useEffect(()=>{
        if(!localStorage.getItem("user_info")){
          history.push("/Login")
        }
          },[])
        
  return (
    <>
   <Cmp/>
    </>
  )
}

export default Protected


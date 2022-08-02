
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserList(){
  const [users, setUser] = useState([])
  const [popup, setPopup] = useState(false);

  
  useEffect(() => {
    getInformation()
}, [])

const getInformation = async ( ) => {

    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/users`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    setUser(result.data.users)
}

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/users/"}${index}`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    .then(res => {
        const del = users.filter(user => index !== user._id.$oid)
        setUser(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
      let headerElement = [ 'id', 'username', 'email', 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

let id=1;
  const renderBody = () => {
    return users && users.map(( {_id,username, email }) => {
        return (
            <tr key={_id.$oid}>
                <td>{id++}</td>
                <td>{username} </td>
                <td>{email} </td>          
                <td className='opration'>      
                <Link to={`/user/UserEdit/${_id.$oid}`}> <button type="button" className='btn btn-dark mr-1'>Edit</button></Link>
                    <button type="button" className="btn btn-danger mr-1" onClick={() =>  
                    {const confirmBox=window.confirm("Are you sure want to delete") 
                    if(confirmBox===true)
                    {removeData(_id.$oid)}
                    }}>Delete</button>
                    <ToastContainer autoClose={1500} />
                </td>
            </tr>
        )
    })
}


  return(<>

        <div>
       
    <div className="page-header">
       <h3 className="page-title"> User</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
        
           <li> <Link to="/user/UserAdd"> <button type="button" className='btn btn-primary'>Add User</button></Link></li>
          
         </ol>
       </nav>
     </div>
     <div className="row">
    
       <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
           <div className="card-body">
            <h4 className="card-title"></h4>
            
            <div className="table-responsive">
               <table className="table table-striped">

            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
               
            </tbody>
        </table>
        </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</>
    );
  }


export default UserList

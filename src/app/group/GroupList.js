
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function GroupList(){
  const [employees, setEmployees] = useState([])
  const [popup, setPopup] = useState(false);
 

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {

      const response = await Axios.get(process.env.REACT_APP_API_URL+"api/v1/groups")
      setEmployees(response.data)
  }

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/groups/"}${index}`)
    .then(res => {
        const del = employees.filter(employee => index !== employee._id.$oid)
        console.log(del)
        setEmployees(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
      let headerElement = [ 'id', 'name', 'description', 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  function editForm(){
    alert("hello how are you");
    
  }
 let id=1;
  const renderBody = () => {
    return employees && employees.map(({_id, name, description}) => {
        return (
            <tr key={_id.$oid}>
                 <td>{id++}</td>
                <td>{name} </td>
                <td>{description}</td>
                <td className='opration'>
                <Link to={`/group/GroupEdit/${_id.$oid}`}> <button type="button" className='btn btn-dark mr-1'>Edit</button></Link>
                 
                    <button type="button" className="btn btn-danger mr-1" onClick={() =>  
                    {const confirmBox=window.confirm("Are you sure want to delete") 
                    if(confirmBox===true)
                    {removeData(_id.$oid)}
                    }}>Delet</button>
                    <ToastContainer autoClose={1500} />
                </td>
            </tr>
        )
    })
}

  return(<>

        <div>
       
    <div className="page-header">
       <h3 className="page-title"> Group</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li> <Link to="/group/GroupAdd"> <button type="button" className='btn btn-primary'>Add Group</button></Link></li>
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




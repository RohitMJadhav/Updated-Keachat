
import React from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from "react-bootstrap";

function OrganizationList(){
  const [employees, setEmployees] = useState([])
  const [popup, setPopup] = useState(false);

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {

      const response = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/organizations")
      setEmployees(response.data)
  }

  const removeData = ( index) => {

      Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/organizations/"}${index}`)
      .then(res => {

          const del = employees.filter(employee => index !== employee._id.$oid)
          setEmployees(del)
          setPopup(true);
      },
      toast.error("Deleted Sucessfully!", {
        position: toast.POSITION.TOP_CENTER
      }))
  }

  const renderHeader = () => {
      let headerElement = ["id", 'name',"address","city","state", 'email', 'contact', 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

let i=1;
  const renderBody = () => {
    return employees && employees.map( ({_id,name, address, city, state, email, contact_no  }) => {
        return (
            <tr key={_id.$oid}>
                <td>{i++}</td>
                <td>{name} </td>
                <td>{address} </td>
                <td>{city} </td>
                <td>{state} </td>
                <td>{email}</td>
                <td>{contact_no}</td>
                <td className='opration'>
            
                 <Link to={`/organization/OrganizationEdit/${_id.$oid}`}> <button type="button" className='btn btn-dark mr-1'>Edit</button></Link>
                    <button type="button" className="btn btn-danger mr-1" 
                    onClick={() =>
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
       <h3 className="page-title"> Organization</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li> <Link to="/organization/OrganizationAdd"> <button type="button" className='btn btn-primary'>Add Organization</button></Link></li>
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


export default OrganizationList

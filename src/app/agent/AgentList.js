import React from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AgentList(){
  const [employees, setEmployees] = useState([])
  const [popup, setPopup] = useState(false);

   
  useEffect(() => {
    getInformation()
}, [])

const getInformation = async ( ) => {

    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/agents`)
    setEmployees(result.data)
}

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/agents/"}${index}`)
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
      // let headerElement = [ 'id', 'first_name','last_name', 'email',"address","city","state","country","client_id","group_id","agentshift_id", 'operation']
      let headerElement = [ 'id','first_name','last_name', 'email',"address",'operation']
      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  function editForm(){
  alert("are you sure want to delete?");
    
  }
let id=1;
  const renderBody = () => {
    return employees && employees.map(({ _id, first_name,last_name,email,address }) => {
      // console.log(JSON.stringify(client_id)+"client_id")
      // console.log(JSON.stringify(group_id)+"group_id")
      // console.log(JSON.stringify(agentshift_id)+"agentshift_id")
      return (
          <tr key={_id.$oid}>
              <td>{id++}</td>
              <td>{first_name} </td>
                 <td>{last_name} </td>
                 <td>{email}</td>
                 <td>{address}</td>
                 {/* <td>{city}</td>
                 <td>{state}</td>
                 <td>{country}</td>
                 <td>{pincode}</td> */}
                 {/* <td>{client_id.$oid}</td>
                 <td>{group_id.$oid}</td>
                 <td>{agentshift_id.$oid}</td> */}
                 <td className='opration'>
                 <Link to={`/agent/AgentEdit/${_id.$oid}`}> <button type="button" className='btn btn-dark mr-1'>Edit</button></Link>
                 
                    <button type="button" className="btn btn-danger mr-1" onClick={() =>removeData(_id.$oid) }>Delete</button>
                    <ToastContainer autoClose={1500} />
                </td>
                </tr>)
    })
}

  return(<>
        <div>
       
    <div className="page-header">
       <h3 className="page-title"> Agent</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li> <Link to="/agent/AgentAdd"> <button type="button" className='btn btn-primary'>Add Agent</button></Link></li>
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


export default AgentList

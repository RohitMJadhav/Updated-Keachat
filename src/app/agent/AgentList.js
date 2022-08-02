import React from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";

export default function AgentList(){
  const [agents, setAgents] = useState([])
  const [popup, setPopup] = useState(false);
  const[loading,setLoading]=useState(false)

   
  useEffect(() => {
    setLoading(true)
    getInformation()
}, [])

const getInformation = async ( ) => {

    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/agents/list/`+JSON.parse(localStorage.getItem("user_info")).userinfo.org_id.$oid,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    setAgents(result.data.agents)
    setLoading(false)
}

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/agents/"}${index}`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    .then(res => {
        const del = agents.filter(agent => index !== agent._id.$oid)
        setAgents(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
     
      let headerElement = [ 'id','first name','last name', 'email',"address",'operation']
      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

let id=1;
  const renderBody = () => {
    return agents && agents.map(({ _id, first_name,last_name,email,address }) => {

      return (
          <tr key={_id.$oid}>
              <td>{id++}</td>
              <td>{first_name} </td>
                 <td>{last_name} </td>
                 <td>{email}</td>
                 <td>{address}</td>
                 <td className='opration'>
                 <Link to={`/agent/agentedit/${_id.$oid}`}> <button type="button" className='btn btn-success mr-1'>Edit</button></Link>
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
           <li> <Link to="/agent/agentadd"> <button type="button" className='btn btn-primary'>Add Agent</button></Link></li>
         </ol>
       </nav>
     </div>
     <div className="row">
    
       <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
           <div className="card-body">
            <h4 className="card-title"></h4>
            {loading?<div style={{paddingLeft:"500px",paddingTop:"200px"}}>
            <BeatLoader color={"#7ED321"} loading={loading} size={35} margin={5} />
            </div>:<div className="table-responsive">
               <table className="table table-striped">

            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
               
            </tbody>
        </table>
        </div>}
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </>
    );
  }




import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LanguageAdd() {
  const [client, setClient] = useState([])
  const [agent, setAgent] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history=useHistory();
const onSubmit = data => {Axios.post(process.env.REACT_APP_API_URL + "api/v1/languages", data)
 .then(response=>{ history.push('/language/LanguageList')},
 toast.success("Thanks for Submitting!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => {history.push('/language/LanguageList')}
 );
 
};

  useEffect(()=>{
getData()
  },[])

  const getData=async()=>{
    const response = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/clients`)
  setClient(response.data)

  const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/agents`)
  setAgent(result.data)
  }

  const renderClient = () => {
    return <select {...register("client_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
     {client.map(({ _id, name }, index) =><option key={index} value={_id.$oid} >{name}</option>)}
     </select>
   }

   const renderAgent = () => {
    return <select {...register("agent_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
     {agent.map(({ _id, first_name }, index) =><option key={index} value={_id.$oid} >{first_name}</option>)}
     </select>
   }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Language </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li> <Link to="/language/LanguageList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                
                  <label htmlFor="language_name" className="col-sm-2 col-form-label">Language Name</label>
                  <div className="col-sm-4">
                    <select {...register("language_name")} className="form-control" style={{fontSize:"16px"}}>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                    </select>
                  </div>

                  <label htmlFor="client_id" className="col-sm-2 col-form-label">client_id</label>
                  <div className="col-sm-4">{renderClient()}</div>
                  </div><br/>
                  <div className="row">
                  <label htmlFor="agent_id" className="col-sm-2 col-form-label">agent_id</label>
                  <div className="col-sm-4">{renderAgent()}</div>
                    </div>
                <br/>
                <button type="submit" className="btn btn-primary mr-6">Submit </button>
                <ToastContainer autoClose={1500} /> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

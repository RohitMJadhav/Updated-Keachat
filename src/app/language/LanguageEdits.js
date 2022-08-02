
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import "./OrganizationAdd.css"
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function LanguageEdits() {
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let history=useHistory();
  let {id}=useParams();

  const onSubmit = data => {
  let id = data['_id'].$oid;
  delete data['_id'];
  delete data['_id.$oid'];
  delete data['created_at'];
  delete data['updated_at'];
  delete data['agent_id'];
  delete data['client_id'];
  Axios
  .put(`${process.env.REACT_APP_API_URL}api/v1/languages/${id}`,data,{ headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  }})
 .then(response=>{ history.push('/language/languagelist')},
 toast.success("Updating Sucessfully!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => {history.push('/language/languagelist')}
 );
 
};


   useEffect(()=>{
    editData()
    },[])
    
    
      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/languages/${id}`,{ headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
        }})
        reset(result.data[0])
       }
    

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Language </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li> <Link to="/language/languagelist"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                
                  <label htmlFor="language_name" className="col-sm-1.2 col-form-label">Language Name</label>
                  <div className="col-sm-4">
                    <select {...register("language_name")} className="form-control" style={{fontSize:"16px"}}>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                    </select>
                  </div>
                  </div>
                <br/>
                <button type="submit" className="btn btn-info " style={{fontSize:"16px"}}>
                  Update
                </button>
                <ToastContainer autoClose={1500} /> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

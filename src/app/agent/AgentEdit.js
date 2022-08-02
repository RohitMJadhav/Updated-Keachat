import React from "react"
import { useForm } from 'react-hook-form';
import Axios from "axios";
import {Link, useParams} from "react-router-dom"
import "./agent.css"
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import{useEffect} from "react"
import 'react-toastify/dist/ReactToastify.css';

export default function AgentEdit(){
 

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
  delete data['created_at'];
  delete data['updated_at'];
  delete data["agentshift_id"]
  delete data["client_id"]
  delete data["group_id"]
  delete data["org_id"]
  Axios.put(`${process.env.REACT_APP_API_URL}api/v1/agents/${id}`,data,{ headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  }})
 .then(response=>{ history.push('/agent/AgentList')},
 toast.success("Updating Sucessfully!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => console.log(error)); 
};



 useEffect(()=>{
    editData()
    },[])
    
    
      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/agents/${id}`,{ headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
        }})
        reset(result.data.agent)
       }
    

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Agent </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li> <Link to="/agent/AgentList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                     
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <label htmlFor="first_name" className="col-sm-1 col-form-label"> First </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="first_name"
                    autoComplete="off"
                    className={`form-control ${
                      errors.first_name ? "is-invalid" : ""
                    }`}
                    placeholder="First Name"
                    {...register("first_name", {
                      required: "First Name is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "First Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.first_name?.message}
                  </div>
                  </div>
                  <label htmlFor="last_name" className="col-sm-1 col-form-label"> Last </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="last_name"
                    autoComplete="off"
                    className={`form-control ${
                      errors.last_name ? "is-invalid" : ""
                    }`}
                    placeholder="Last Name"
                    {...register("last_name", {
                      required: "Last Name is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.last_name?.message}
                  </div>
                  </div>
                    </div>
                  
                  <div className="row">
                     <label htmlFor="address" className="col-sm-1 col-form-label"> Address </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="address"
                    autoComplete="off"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    placeholder="Address"
                    {...register("address", {
                      required: "Address is required",
                      minLength: {
                        value: 25,
                        message: "Address should be greater than 25 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name shouldn't be greater than 50 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.address?.message}
                  </div>
                  </div>
                  <label htmlFor="city" className="col-sm-1 col-form-label"> City </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="city"
                    autoComplete="off"
                    className={`form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    placeholder="City"
                    {...register("city", {
                      required: "City is required",
                      minLength: {
                        value: 2,
                        message: "City name should be greater than 2 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "City name shouldn't be greater than 15 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.city?.message}
                  </div>
                  </div>


                  </div>
                  <div className="row">
                    <label htmlFor="state" className="col-sm-1 col-form-label"> State </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="state"
                    autoComplete="off"
                    className={`form-control ${
                      errors.state ? "is-invalid" : ""
                    }`}
                    placeholder="State"
                    {...register("state", {
                      required: "State is required",
                      minLength: {
                        value: 3,
                        message: "State name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "State name shouldn't be greater than 15 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.state?.message}
                  </div>
                  </div>
                  <label htmlFor="country" className="col-sm-1 col-form-label"> Country </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="country"
                    autoComplete="off"
                    className={`form-control ${
                      errors.country ? "is-invalid" : ""
                    }`}
                    placeholder="Country"
                    {...register("country", {
                      required: "Country name is required",
                      minLength: {
                        value: 3,
                        message: "Country name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "Country name shouldn't be greater than 15 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.country?.message}
                  </div>
                  </div>
                  </div>
                  <div className="row">
                    <label htmlFor="pincode" className="col-sm-1 col-form-label"> Pincode </label>
                    <div className="col-sm-5">
                    <input
                    type="tel"
                    name="pincode"
                    autoComplete="off"
                    className={`form-control ${
                      errors.pincode ? "is-invalid" : ""
                    }`}
                    placeholder="Pincode"
                    {...register("pincode", {
                      required: "Pincode Number is required",
                      validate:(value)=>value.length>5 && value.length<7 ,
                      minLength: {
                        value: 6,
                        message: "Pincode number should be 6 digit",
                      },
                      maxLength: {
                        value: 6,
                        message: "Pincode shouldn't be greater than 6 digit",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.pincode?.message}
                  </div>
                  </div>
                   
                   <label htmlFor="email" className="col-sm-1 col-form-label"> Email </label>
                     <div className="col-sm-5">
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                        message: "Email must be a valid email address",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.email?.message}
                  </div>
                  </div>
                  </div>


                  <div className="row">
                  <label htmlFor="languages" className="col-sm-2 col-form-label">Language</label>
                  <div className="col-sm-4">
                  <div className="row" >
                      
                    <div className="mr-3">
                      <input 
                      type="checkbox"
                      value="Marathi" 
                      
                      {
                        ...register("languages",{required:{
                          value:true,
                          message:"language is required"
                        }})
                      }/>
                      <p >Marathi</p>
                    </div>
                  
                    <div className="mr-4">
                      <input 
                      type="checkbox"
                      value="Hindi"
                      
                      {
                        ...register("languages",{required:{
                          value:true,
                          message:"language is required"
                        }})
                      }/>
                      <p >Hindi</p>
                    </div>
                  
                    <div className="mr-3">
                      <input 
                      type="checkbox"
                      value="English"
                     
                      {
                        ...register("languages",{required:{
                          value:true,
                          message:"language is required"
                        }})
                      }/>
                      <p >English</p>
                    </div>
                   
                  </div>
                  {errors.languages && <span style={{color:"red"}}>{errors.languages.message}</span>}
                  </div>
                  </div>
                   <div className="bposition">
                   <button type="submit" className="btn btn-info" style={{fontSize:"16px"}}>Update</button>
                  </div>
                  <ToastContainer autoClose={1500} /> 
                  </form>
            </div>
           </div>
          </div>
          </div>
          </div>
             
    )
  
    }












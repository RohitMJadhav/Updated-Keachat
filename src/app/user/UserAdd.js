import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";
import { Link } from 'react-router-dom';
import "./user.css"
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserAdd(){

  const [org, setOrg] = useState([])
  const [role, setRole] = useState([])

 const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

let history=useHistory();

const onSubmit = data => {Axios.post( process.env.REACT_APP_API_URL+"api/v1/users", data)
 .then(response=>{ history.push('/user/UserList')},
 toast.success("Thanks for Submitting!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => {history.push('/user/UserList')}
 );
 
};

useEffect(()=>{
  getData()
},[])

const getData = async () => {
 
  const response = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/organizations")
  setOrg(response.data)
  
  const output = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/roles")
  setRole(output.data)
 
}

const renderBody = () => {
  return <select {...register("org_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
   {org.map(({ _id, name }, index) =><option key={index} value={_id.$oid} >{name}</option>)}
   </select>
 }

 const renderRole = () => {
  return <select {...register("role_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
   {role.map(({ _id, type_name }, index) =><option key={index} value={_id.$oid} >{type_name}</option>)}
   </select>
 }
 
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> User</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
             
              <li> <Link to="/user/UserList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
           
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>  
                  <div className="row">
                     <label htmlFor="address" className="col-sm-2 col-form-label"> Username </label>
                    <div className="col-sm-4">
                  <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    placeholder="Username"
                    {...register("username", {
                      required: "Usename is required",
                      minLength: {
                        value: 10,
                        message: "Usename should be greater than 10 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "Usename shouldn't be greater than 15 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.username?.message}
                  </div>
                  </div>
                   <label htmlFor="email" className="col-sm-2 col-form-label"> Email </label>
                     <div className="col-sm-4">
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
                    <label htmlFor="_password" className="col-sm-2 col-form-label"> Password </label>
                    <div className="col-sm-4">
                  <input
                    type="password"
                    name="_password"
                    autoComplete="off"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    {...register("_password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password should be greater than 6 characters",
                      },
                      maxLength: {
                        value: 10,
                        message: "Password shouldn't be greater than 10 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?._password?.message}
                  </div>
                  </div>
                  </div>

                  <div className="row">
                    <label htmlFor="org_id" className="col-sm-2 col-form-label">Organization</label>
                    <div className="col-sm-4" >{renderBody()}</div>
                    <label htmlFor="role_id" className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-4">{renderRole()}</div>
                  </div>
                   <div className="bposition">
                  <button type="submit" className="btn btn-primary" style={{fontSize:"16px"}}>Submit</button>
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



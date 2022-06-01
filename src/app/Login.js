import React, { Component, useEffect,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import './Login.css'
import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import demo from '../images/demo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login(){

  const [passwordShown,setpasswordShown] = useState(false);
  const togglePassword =()=>{
    setpasswordShown(!passwordShown);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history=useHistory()

  async function onSubmit(data){
 let result=await fetch(`${process.env.REACT_APP_API_URL}auth/login`,{
   method:"POST",
   headers:{
     "Content-Type":"application/json",
     "Accept":"application/json"
   },
   body:JSON.stringify(data)
 });
 result=await result.json();
 localStorage.setItem("user_info",JSON.stringify(result))
 console.log(result)
 console.log()
 if(result.statusCode==401){
  history.push("/Login")
 }
 else{
  history.push("/dashboard")
 }
 toast.error("Wrong Username/Password", {
  position: toast.POSITION.TOP_CENTER,
})
  }

    return (
        <div>
            {/* <img src={demo} style={{height:"150vh",width:"100vw"}} /> ,*/}
        <div className="d-flex align-items-center auth px-0" style={{backgroundColor:"#728FCE"}}>    
          <div className="row w-100 mx-0  ">
            <div className="col-lg-4 mx-auto ">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 shadow p-3 mb-5 bg-white rounded">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="col">
                    <label htmlFor="username" className="col-sm-1 col-form-label"> UserName </label>
                    <div className="col-sm-12">
                  <input
                    type="text"
                    name="username"
                    style={{fontSize:"16px"}}
                    autoComplete="off"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    placeholder="User Name"
                    {...register("username", {
                      required: "User Name is required",
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.username?.message}
                  </div>
                  </div>
                     <label htmlFor="password" className="col-sm-1 col-form-label"> Password </label>
                     <div className="col-sm-12">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    style={{fontSize:"16px"}}
                    autoComplete="off"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                   <VisibilityIcon onClick = {togglePassword} fontSize="small" className='iconposition'/> 
                  <div className="invalid-feedback">
                    {errors?.password?.message}
                  </div>
                  </div>
                    </div>
                  <div className="mt-3">
                    <button type='submit' className='btn btn-primary'>Login</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                  <ToastContainer autoClose={3500} /> 
                </form>
              </div>
            </div>
          </div>
        </div>  
        </div>
            )
  }
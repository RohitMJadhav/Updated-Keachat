import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {Form} from "react-bootstrap"
import "./whattsapp.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";
import { useHistory } from 'react-router-dom';


export default function WhatsappSettingAdd () {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      let history=useHistory();

      const onSubmit = data => {
        data.client_id=JSON.parse(localStorage.getItem("current_client_id"))
        Axios.post(process.env.REACT_APP_API_URL+"api/v1/whatsappSettings", data,{ headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
          }},
           
         )
       .then(response=>
       toast.success("Whatsapp setting added sucessfully!", {
         position: toast.POSITION.TOP_CENTER
       }))
       .catch(error => console.log(error)
       );
       
      };
      
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Whatsapp Setting </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Facebook Setting</a></li> */}
                            {/* <li className="breadcrumb-item active" aria-current="page">Add</li> */}
                            <li><Link to="/whatsappsetting/whatsappsettinglist"><button type="button" className="btn btn-primary mr-1">Back</button></Link></li> 
                        </ol>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">

                                {/* <form className="forms-sample">
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >User Name</label>
                                        <div className='col-sm-4'>
                                            <Form.Control type="text-area" className="form-control" id="exampleInputUsername2" placeholder="Username" /><br />
                                        </div>
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >Password</label>
                                        <div className='col-sm-4'>
                                            <Form.Control type="password" className="form-control" id="exampleInputUsername2" placeholder="Password" /><br />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Contact</label>
                                        <div className="col-sm-4">
                                            <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="98233454**" />
                                        </div>

                                        <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">URL</label>
                                        <div className="col-sm-4">
                                            <Form.Control type="url" className="form-control" id="exampleInputEmail2" placeholder="www.gmail.com" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Client id</label>
                                        <div className="col-sm-4">
                                            <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
                                        </div>
                                    
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Page id</label>
                                        <div className="col-sm-4">
                                            <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
                                        </div>
                                    </Form.Group>


                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Page Access Token</label>
                                        <div className="col-sm-4">
                                            <textarea className="form-control" id="exampletextarea" rows="6" placeholder=''></textarea>
                                        </div>
                                    
                                        <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Verify Token</label>
                                        <div className="col-sm-4">
                                            <textarea className="form-control" id="exampletextarea" rows="6" placeholder=''></textarea>
                                        </div>
                                    </Form.Group>





                                    <div className="form-check">

                                    </div>
                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>  <button className="btn btn-light">Cancel</button>


                                </form> */}

                    <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
                    <div className="row">
                    <label htmlFor="name" className="col-sm-2 col-form-label"> Media </label>
                    <div className="col-sm-4">
                  <input
                    type="text"
                    name="media"
                    autoComplete="off"
                    className={`form-control ${
                      errors.media ? "is-invalid" : ""
                    }`}
                    placeholder="Media"
                    {...register("media", {
                      required: "Name is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Media Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Media Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Media Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.media?.message}
                  </div>
                  </div>
                    
                  <label htmlFor="whatsapp_username" className="col-sm-2 col-form-label"> Whatsapp Username </label>
                    <div className="col-sm-4">
                  <input
                    type="text"
                    name="whatsapp_username"
                    autoComplete="off"
                    className={`form-control ${
                      errors.whatsapp_username ? "is-invalid" : ""
                    }`}
                    placeholder="whatsapp_username"
                    {...register("whatsapp_username", {
                      required: "whatsapp_username is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "whatsapp_username must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "whatsapp_username should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "whatsapp_username shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.whatsapp_username?.message}
                  </div>
                  </div>
                    


                    </div>
                  
                  <div className="row">
                    <label htmlFor="contact_no" className="col-sm-2 col-form-label"> Whatsapp Password </label>
                    <div className="col-sm-4">
                  <input
                    type="password"
                    name="whatsapp_password"
                    autoComplete="off"
                    className={`form-control ${
                      errors.whatsapp_password ? "is-invalid" : ""
                    }`}
                    placeholder="Whatsapp Password"
                    {...register("whatsapp_password", {
                      required: "Password is required", 
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.whatsapp_password?.message}
                  </div>
                  </div>


                    <label htmlFor="address" className="col-sm-2 col-form-label"> Whatsapp URL </label>
                  <div className="col-sm-4">
                  <input
                    type="text"
                    name="whatsapp_url"
                    autoComplete="off"
                    className={`form-control ${
                      errors.whatsapp_url ? "is-invalid" : ""
                    }`}
                    placeholder="Whattsapp URL"
                    {...register("whatsapp_url", {
                      required: "Address is required",
                      minLength: {
                        value: 10,
                        message: "whatsapp_url should be greater than 10 characters",
                      },
                      maxLength: {
                        value: 40,
                        message: "whatsapp_url shouldn't be greater than 40 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.whatsapp_url?.message}
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <label htmlFor="whatsapp_webhook_url" className="col-sm-2 col-form-label"> Whattsapp Webhook URL </label>
                  <div className="col-sm-4">
                  <input
                    type="text"
                    name="whatsapp_webhook_url"
                    autoComplete="off"
                    className={`form-control ${
                      errors.whatsapp_webhook_url ? "is-invalid" : ""
                    }`}
                    placeholder="whatsapp_webhook_url"
                    {...register("whatsapp_webhook_url", {
                      required: "Whattsapp web URL is required",
                      minLength: {
                        value: 10,
                        message: "Whatsapp_webhook_url should be greater than 10 characters",
                      },
                      maxLength: {
                        value: 100,
                        message: "Whatsapp_webhook_url shouldn't be greater than 100 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.whatsapp_webhook_url?.message}
                  </div>
                  </div>
                  <label htmlFor="whatsapp_mobile_number" className="col-sm-2 col-form-label"> WhattsApp Mobile Number </label>
                    <div className="col-sm-4">
                  <input
                    type="tel"
                    name="whatsapp_mobile_number"
                    autoComplete="off"
                    className={`form-control ${
                      errors.whatsapp_mobile_number ? "is-invalid" : ""
                    }`}
                    placeholder="Whatts App Number"
                    {...register("whatsapp_mobile_number", {
                      required: "Whattsapp Mobile Number is required",
                      validate:(value)=>value.length>10 && value.length<13 ,
                      minLength: {
                        value: 12,
                        message: "Whattsapp number should be 10 digit",
                      },
                      maxLength: {
                        value: 12,
                        message: "Whattsapp number shouldn't be greater than 10 digit",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.whatsapp_mobile_number?.message}
                  </div>
                  </div>
                  

                  </div>
                  

                  <div className='bposition'>
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



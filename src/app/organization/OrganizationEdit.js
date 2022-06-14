import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./OrganizationAdd.css"
import Axios from "axios";
import { useHistory,useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OrganizationEdit(){

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset
} = useForm();


let history=useHistory();
let {id}=useParams();


const onSubmit = (data) => {
 let id = data['_id'].$oid;
  delete data['_id'];
  delete data['created_at'];
  delete data['updated_at'];
  console.log(data)
  Axios.put(`${process.env.REACT_APP_API_URL}api/v1/organizations/${id}`,data)
    .then((response)=>{history.push("/organization/OrganizationList")},
    toast.success("Updating Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    })
    )
    .catch(error =>console.log(error));
  
};

useEffect(()=>{
editData()
},[])


  const editData=async()=>{
  
    const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/organizations/${id}`)
    reset(result.data[0])
   }

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Organization </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li> <Link to="/organization/Organization-list"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <label htmlFor="name" className="col-sm-1 col-form-label"> Name </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
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
                    {errors?.name?.message}
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
                    <label htmlFor="contact_no" className="col-sm-1 col-form-label"> Contact </label>
                    <div className="col-sm-5">
                  <input
                    type="tel"
                    name="contact_no"
                    autoComplete="off"
                    className={`form-control ${
                      errors.contact_no ? "is-invalid" : ""
                    }`}
                    placeholder="Contact"
                    {...register("contact_no", {
                      required: "Contact Number is required",
                      // validate:(value)=>value.length>9 && value.length<11 ,
                      minLength: {
                        value: 10,
                        message: "Contact number should be 10 digit",
                      },
                      maxLength: {
                        value: 10,
                        message: "Contact number shouldn't be greater than 10 digit",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.contact_no?.message}
                  </div>
                  </div>
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
                        value: 15,
                        message: "Address should be greater than 15 characters",
                      },
                      maxLength: {
                        value: 40,
                        message: "Name shouldn't be greater than 40 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.address?.message}
                  </div>
                  </div>
                  </div>

                  <div className="row">
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
                  </div>
                  <div className="row">
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

                  </div>
                  <div className='bposition'>
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






import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory,useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState,useEffect} from "react"
import "./Role.css"

export default function RoleEdit() {

   
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let history = useHistory();
  let {id}=useParams();

  const onSubmit = (data) => {
    let id = data['_id'].$oid;
    delete data['_id'];
    // delete data['_id.$oid'];
    delete data['created_at'];
    delete data['updated_at'];
    console.log(data)
    Axios.put(`${process.env.REACT_APP_API_URL}api/v1/roles/${id}`, data)
      .then(
        (response) => {
          history.push("/role/RoleList");
        },
        toast.success("Updating Sucessfully!", {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch(error =>console.log(error));
  };


  useEffect(() => {
    editData()
    
}, [])


      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/roles/${id}`)
        reset(result.data[0])
        console.log(result.data[0])
       }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Role Edit</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li>
            <Link to="/role/RoleList"><button type="button" className="btn btn-primary"> Back </button></Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                   <label htmlFor="type_name" className="col-sm-1.1 col-form-label"> Type Name </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="type_name"
                    autoComplete="off"
                    className={`form-control ${
                      errors.type_name ? "is-invalid" : ""
                    }`}
                    placeholder="Type Name"
                    {...register("type_name", {
                      required: "Type Name is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Type Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Type Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 8,
                        message: "Type Name shouldn't be greater than 8 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.type_name?.message}
                  </div>
                  </div>
                  <label htmlFor="description" className="col-sm-1.1 col-form-label"> Description </label>
                    <div className="col-sm-5">
                  <textarea
                    type="text"
                    name="description"
                    autoComplete="off"
                    rows={5}
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    placeholder="Description"
                    {...register("description", {
                      required: "Decsription is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Decsription must be a valid string",
                      },
                      minLength: {
                        value: 10,
                        message: "Decsription should be greater than 10 characters",
                      },
                      maxLength: {
                        value: 25,
                        message: "Decsription shouldn't be greater than 25 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.description?.message}
                  </div>
                  </div>       
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
  );
}



import React, { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import "./agentshift.css"
import { useHistory,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AgentShiftEdit() {

  const [orgid, setOrgid] = useState([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let history=useHistory();
  let {id}=useParams()

  const onSubmit = (data)=> {
    let id = data['_id'].$oid;
    delete data['_id'];
    delete data['org_id'];
    delete data['created_at'];
    delete data['updated_at'];
    console.log(data)
    Axios.put( `${process.env.REACT_APP_API_URL}api/v1/agentshifts/${id}`,data)
    .then(response=>{ history.push("/agentshift/AgentShiftList")},
    toast.success("Updating Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
    .catch(error =>console.log(error))
   
    
  };


  useEffect(() => {
    getData()   
}, [])

  const getData = async () => {
    const response = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/organizations")
    setOrgid(response.data)  
}

  const renderBody = () => {
   return <select {...register("org_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
    {orgid.map(({ _id, name }, index) =><option key={index} value={_id.$oid} >{name}</option>)}
    </select>
}

useEffect(()=>{
    editData()
    },[])
    
    
      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/agentshifts/${id}`)
        reset(result.data[0])
       }
    


  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> AgentShift </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link to="/agentshift/AgentShiftList"><button type="button" className="btn btn-primary">Back </button></Link>
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
                     <label htmlFor="shift_name" className="col-sm-1.1 col-form-label"> Shift Name </label>
                    <div className="col-sm-5">
                  <input
                    type="text"
                    name="shift_name"
                    autoComplete="off"
                    className={`form-control ${
                      errors.shift_name ? "is-invalid" : ""
                    }`}
                    placeholder="Shift Name"
                    {...register("shift_name", {
                      required: "Shift Name is required",
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: " Shift Name must be a valid string",
                      },
                      minLength: {
                        value: 4,
                        message: " Shift Name should be greater than 4 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: " Shift Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.shift_name?.message}
                  </div>
                  </div>


                  <label
                    htmlFor="org_id"
                    className="col-sm-1.1 col-form-label"
                  >
                    Organization
                  </label>
                    <div className="col-sm-4">{renderBody()}</div>  
                 
                </div>
             
                <div className="row">
                <div className="labelpositionstart">
                    <label htmlFor="start_time" className="col-sm-1.1 col-form-label"> Start Time </label>
                   </div>
                    <div className="col-sm-5">
                    <div className="textboxstart">
                  <input
                    type="time"
                    name="start_time"
                    autoComplete="off"
                    className={`form-control ${
                      errors.start_time ? "is-invalid" : " "
                    }`}
                    placeholder="Start Time"
                    {...register("start_time", {
                      required: "Start Time is required",
                    })}
                  />
                  </div>
                  <div className="invalid-feedback">
                    {errors?.start_time?.message}
                  </div>
                  </div>
                  <div className="labelposition">
                  <label htmlFor="end_time" className="col-sm-1.1 col-form-label"> End Time </label>
                  </div>
                    <div className="col-sm-5">
                      <div className="textboxend">
                  <input
                    type="time"
                    name="end_time"
                    autoComplete="off"
                    className={`form-control ${
                      errors.end_time ? "is-invalid" : ""
                    }`}
                    placeholder="Start Time"
                    {...register("end_time", {
                      required: "End Time is required",
                    })}
                  />
                  </div>
                  <div className="invalid-feedback">
                    {errors?.end_time?.message}
                  </div>
                  </div>
               
                </div>
                <div className="form-check"></div>
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
  );
}

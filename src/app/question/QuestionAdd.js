
import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./question.css"

export default function QuestionAdd(){
  const [question, setQuestion] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history=useHistory();
const onSubmit = data => {Axios.post(process.env.REACT_APP_API_URL+"api/v1/questions", data )
 .then(response=>{ history.push('/question/QuestionList')},
 toast.success("Thanks for Submitting!", {
   position: toast.POSITION.TOP_CENTER
 }))
 .catch(error => {history.push('/question/QuestionList')}
 );
 
};

  useEffect(()=>{
getData()
  },[])

  const getData=async()=>{
    const response = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/clients")
  setQuestion(response.data)
  }

  const renderClient = () => {
    return <select {...register("client_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
     {question.map(({ _id, name }, index) =><option key={index} value={_id.$oid} >{name}</option>)}
     </select>
   }
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Question </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
             
              <li> <Link to="/question/QuestionList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
             
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
               
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                     <label htmlFor="question_no" className="col-sm-2 col-form-label"> Question Number </label>
                    <div className="col-sm-4">
                  <input
                    type="number"
                    name="question_no"
                    autoComplete="off"
                    className={`form-control ${
                      errors.question_no ? "is-invalid" : ""
                    }`}
                    placeholder="Question Number"
                    {...register("question_no", {
                      required: "Name is required",
                      minLength: {
                        value: 1,
                        message: "Question Number should be greater than 1 digit",
                      },
                      maxLength: {
                        value: 5,
                        message: "Question Number shouldn't be greater than 5 digit",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.question_no?.message}
                  </div>
                  </div>

                    <label htmlFor="client_id" className="col-sm-2 col-form-label">client_id</label>
                    <div className="col-sm-4">{renderClient()}</div>
                    
                    </div>
                    <div className="row">
                     <label htmlFor="question" className="col-sm-2 col-form-label"> Name </label>
                    <div className="col-sm-4">
                  <input
                    type="text"
                    name="question"
                    autoComplete="off"
                    className={`form-control ${
                      errors.question ? "is-invalid" : ""
                    }`}
                    placeholder="Question"
                    {...register("question", {
                      required: "Question is required",
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.question?.message}
                  </div>
                  </div>

                    </div>
                  <br/><br/>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <ToastContainer autoClose={1500} /> 
                  
                  </form>
            </div>
           </div>
          </div>
          </div>
          </div>
             
    )
  
    }

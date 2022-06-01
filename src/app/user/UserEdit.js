import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import "./user.css"
import { useHistory,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserEdit(){

  const [org, setOrg] = useState([])
  const [role, setRole] = useState([])


  // const [passwordShown,setpasswordShown] = useState(false);
  // const togglePassword =()=>{
  //   setpasswordShown(!passwordShown);
  // }
 
  // const [confirmpasswordShown,setconfirmpasswordShown] = useState(false);
  // const toggleConfirmPassword =()=>{
  //   setconfirmpasswordShown(!confirmpasswordShown);
  // }
 
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
  Axios.put(`${process.env.REACT_APP_API_URL}api/v1/users/${id}`, data)
    .then(
      (response) => {
        history.push("/user/UserList");
      },
      toast.success("Updating Sucessfully!", {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch(error =>console.log(error));
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
 

 useEffect(() => {
    editData()
    
}, [])


      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/users/${id}`)
        reset(result.data[0])
        console.log(result.data[0])
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
                  {/* <div className="row">
                    <label htmlFor="first_name" className="col-sm-2 col-form-label"> First Name</label>
                    <div className="col-sm-4">
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
                        message: "First Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "First Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.first_name?.message}
                  </div>
                  </div>
                  <label htmlFor="last_name" className="col-sm-2 col-form-label"> Last Name </label>
                    <div className="col-sm-4">
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
                        message: "Last Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Last Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: " Last Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.last_name?.message}
                  </div>
                  </div>


                    </div> */}
                  
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

                  {/* <label htmlFor="confirmpassword" className="col-sm-2 col-form-label"> Confirm Password </label>
                    <div className="col-sm-4">
                  <input
                    type="password"
                    name="confirmpassword"
                    autoComplete="off"
                    className={`form-control ${
                      errors.confirmpassword? "is-invalid" : ""
                    }`}
                    placeholder="confirmpassword"
                    {...register("confirmpassword", {
                      required: "confirmpassword is required",
                      minLength: {
                        value: 6,
                        message: "confirmpassword should be greater than 6 characters",
                      },
                      maxLength: {
                        value: 10,
                        message: "confirmpassword name shouldn't be greater than 10 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.confirmpassword?.message}
                  </div>
                  </div> */}

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



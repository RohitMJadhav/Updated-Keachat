import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./department.css";
import { useHistory,useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useEffect} from "react"

export default function DepartmentEdit() {

// const [orgid, setOrgid] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  let history = useHistory();
  let {id}=useParams();

  const onSubmit = (data) => {
    let id = data['_id'].$oid;
    delete data['_id'];
    delete data['org_id'];
    delete data['_id.$oid'];
    delete data['created_at'];
    delete data['updated_at'];
    console.log(data)
    Axios.put(`${process.env.REACT_APP_API_URL}api/v1/departments/${id}`, data)
      .then(
        (response) => {
          history.push("/department/department-list");
        },
        toast.success("Updating Sucessfully!", {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch(error =>console.log(error));
  };


//   useEffect(() => {
//     getData()
    
// }, [])

//   const getData = async () => {
//     const response = await Axios.get( process.env.REACT_APP_API_URL+"api/v1/organizations")
//     setOrgid(response.data)  
// }

//   const renderBody = () => {
//    return <select {...register("org_id")} className="form-control" style={{fontSize:"16px",fontWeight:"bold"}}>
//     {orgid.map(({ _id, name }, index) =><option key={index} value={_id.$oid} >{name}</option>)}
//     </select>
// }

useEffect(()=>{
    editData()
    },[])
    
    
      const editData=async()=>{
      
        const result = await Axios.get( `${process.env.REACT_APP_API_URL}api/v1/departments/${id}`)
        reset(result.data[0])
        console.log(result.data[0])
       }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Department</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li><Link to="/department/department-List"><button type="button" className="btn btn-primary">Back</button></Link></li>
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

                  {/* <label htmlFor="org_id" className="col-sm-1.1 col-form-label">
                    Organization Id
                  </label>
                   <div className="col-sm-4">{renderBody()}</div>   */}
                </div>
                <div className="position">
                <div className="row">
                <label htmlFor="name" className="col-sm-1.1 col-form-label"> Description </label>
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
                        value: 15,
                        message: "Decsription should be greater than 15 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Decsription shouldn't be greater than 50 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors?.description?.message}
                  </div>
                  </div>
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
  );
}



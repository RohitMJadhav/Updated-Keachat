
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";
// import { useLocation } from "react-router-dom";

export default function GroupList(){
  const [groups, setGroups] = useState([])
  const [popup, setPopup] = useState(false);
  const[loading,setLoading]=useState(false)


  // const location = useLocation();

  useEffect(() => {

    setLoading(true)

      getData()
  }, [])


  const getData = async () => {
  
      const response = await Axios.get(process.env.REACT_APP_API_URL+"api/v1/groups/list/"+JSON.parse(localStorage.getItem("current_dept_id")),{ headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
      }})
      setGroups(response.data.groups)
      setLoading(false)
  }

  // const getData = async () => {
  //      console.log("hii")
  //      console.log(location.state)
  //      console.log("rohit")
  //       const response = await Axios.get(process.env.REACT_APP_API_URL+"api/v1/groups/list/"+location.state,{ headers:{
  //         "Content-Type":"application/json",
  //         "Accept":"application/json",
  //         "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
  //       }})
  //       setGroups(response.data.groups)
  //       setLoading(false)
  //   }

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/groups/"}${index}`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    .then(res => {
        const del = groups.filter(group => index !== group._id.$oid)
        console.log(del)
        setGroups(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
      let headerElement = [ 'id', 'name', 'description', 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  
 let id=1;
  const renderBody = () => {
    return groups && groups.map(({_id, name, description}) => {
        return (
            <tr key={_id.$oid}>
                 <td>{id++}</td>
                <td>{name} </td>
                <td>{description}</td>
                <td className='opration'>
                <Link to={`/group/groupedit/${_id.$oid}`}> <button type="button" className='btn btn-success mr-1'>Edit</button></Link>
                 
                    <button type="button" className="btn btn-danger mr-1" onClick={() =>  
                    {const confirmBox=window.confirm("Are you sure want to delete") 
                    if(confirmBox===true)
                    {removeData(_id.$oid)}
                    }}>Delete</button>
                    <ToastContainer autoClose={1500} />
                </td>
            </tr>
        )
    })
}

  return(<>

        <div>
       
    <div className="page-header">
       <h3 className="page-title"> Group</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
         <li><Link to="/department/departmentlist"><button type="button" className="btn btn-primary mr-1">Back</button></Link></li> 
           <li> <Link to="/group/groupadd"> <button type="button" className='btn btn-primary'>Add Group</button></Link></li>
        </ol>
       </nav>
     </div>
     <div className="row">
    
       <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
           <div className="card-body">
            <h4 className="card-title"></h4>
            {loading?<div style={{paddingLeft:"500px",paddingTop:"200px"}}>
            <BeatLoader color={"#7ED321"} loading={loading} size={35} margin={5} />
            </div>:
            <div className="table-responsive">
               <table className="table table-striped">

            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
               
            </tbody>
        </table>
        </div>
              }
          </div>
        </div>
      </div> 
    </div>
  </div>
  </>
    );
  }




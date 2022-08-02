import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import  { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";
// import { useLocation } from "react-router-dom";


export default function QuestionList(){
  const [questions, setQuestions] = useState([])
  const [popup, setPopup] = useState(false);
  const[loading,setLoading]=useState(false)

  
  // const location = useLocation();

  useEffect(() => {
    setLoading(true)
      getData()
  }, [])

  const getData = async () => {
  
      const response = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/questions/list/`+JSON.parse(localStorage.getItem("current_client_id")),{ headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
      }})
      setQuestions(response.data.questions)
      setLoading(false)
      
  }

//   const getData = async () => {
  
//     const response = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/questions/list/${location.state}`
//     ,{ headers:{
//       "Content-Type":"application/json",
//       "Accept":"application/json",
//       "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
//     }})
//     setQuestions(response.data.questions)
//     setLoading(false)
    
// }

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/questions/"}${index}`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    .then(res => {
        const del = questions.filter(question => index !== question._id.$oid)
        setQuestions(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
      let headerElement = [ 'id', 'Question No.',"Question", 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }
  
 let id=1;
  const renderBody = () => {
   
    return questions && questions.map(({_id,question_no,question}) => {
     
        return (
            <tr key={_id.$oid}>
                 <td>{id++}</td>
                <td>{question_no} </td>
                <td>{question} </td>
                
                <td className='opration'>
                 <Link to={`/question/questionedit/${_id.$oid}`}> <button type="button" className='btn btn-success mr-1'>Edit</button></Link>
                    <button type="button" className="btn btn-danger" onClick={() => removeData(_id.$oid)}>Delete</button>
                    <ToastContainer autoClose={1500} />
                </td>
            </tr>
        )
    })
}

  return(<>
        <div>
       
    <div className="page-header">
       <h3 className="page-title"> Question</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
         <li><Link to="/client/clientlist"><button type="button" className="btn btn-primary mr-1">Back</button></Link></li> 
           <li> <Link to="/question/questionadd"> <button type="button" className='btn btn-primary'>Add Question</button></Link></li>
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




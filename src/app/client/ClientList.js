
import React from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import Tooltip from '@mui/material/Tooltip';
import  { useState,useEffect} from 'react'
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";


export default function ClientList(){
  const [clients, setClients] = useState([])
  const [popup, setPopup] = useState(false);
  const[loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    getInformation()
}, [])

const getInformation = async ( ) => {

    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/clients/list/`+JSON.parse(localStorage.getItem("user_info")).userinfo.org_id.$oid,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    setClients(result.data.clients)
    setLoading(false)
      
}

  const removeData = ( index) => {

    Axios.delete(`${process.env.REACT_APP_API_URL+"api/v1/clients/"}${index}`,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    .then(res => {
        const del = clients.filter(client => index !== client._id.$oid)
        setClients(del)
        setPopup(true);
    },
    toast.error("Deleted Sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    }))
}

  const renderHeader = () => {
      let headerElement = [ "id","name","address","city","state", "email", "Contact","pincode","settings","question", "operation"]

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  let history=useHistory()

  const handleSet=(_id)=>{
    console.log("hello")
    let setvalue=_id.$oid
    localStorage.setItem("current_client_id",JSON.stringify(setvalue))
    history.push("/question/questionlist")
  //   history.push({
  //     pathname: '/question/questionlist',
  //     search: '?query=abc',
  //     state: _id.$oid
  // })
//whatsappsetting/whatsappsettingadd
  }

  const handleWhatsapp = async(client_id)=>{
    console.log("Hi")
    console.log(client_id)
    console.log("keachat")
    let setvalue=client_id
    localStorage.setItem("current_client_id",JSON.stringify(setvalue))
    const result = await Axios.get(`${process.env.REACT_APP_API_URL}api/v1/whatsappSettings/`+client_id,{ headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem("user_info")).access_token
    }})
    console.log(result)
    console.log(result.status)
    console.log(result.data)
    if(result.status==200){
      console.log("hello")
      // console.log(result.data.whatsappSetting.hasOwnProperty("_id"))
      console.log("hello")
      if(result.data.whatsappSetting && result.data.whatsappSetting.hasOwnProperty('_id')){
        history.push("/whatsappsetting/whatsappsettingedit/"+client_id)
            // history.push({
            // pathname: '/whatsappsetting/whatsappsettingedit/',
            // search: '?query=abc',
            // state: client_id
            // })

      }
      
     else{
        history.push('/whatsappsetting/whatsappsettingadd/'+client_id)
      }
    }
  }

let id=1;
  const renderBody = () => {
    return clients && clients.map(( {_id,name,address,city,state, email, contact_no,pincode }) => {
        return (
            <tr key={_id.$oid}>
                <td>{id++}</td>
                <td>{name} </td>
                <td>{address} </td>
                <td>{city} </td>
                <td>{state} </td>
                <td>{email}</td>
                <td>{contact_no}</td>
                <td>{pincode}</td>
                <td><Tooltip title = "Whatsapp Setting"><button  type="button"  className='btn btn-primary mr-1 btn btn-success' height="20px" width= "20px"  onClick={(event) => handleWhatsapp(_id.$oid)}><WhatsappOutlinedIcon fontSize="small"/></button></Tooltip>
                </td> 
                     <td> <button type="button"  className='btn btn-primary mr-1' onClick={(event) => handleSet(_id)}>?</button></td>   
                <td className='opration'>
               
                <Link to={`/client/clientedit/${_id.$oid}`}> <button type="button" className='btn btn-success mr-1'>Edit</button></Link>
                 
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
       <h3 className="page-title"> Client</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li> <Link to="/client/clientadd"> <button type="button" className='btn btn-primary'>Add Client</button></Link></li>
         </ol>
       </nav>
     </div>
     <div className="row">
    
       <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
           <div className="card-body">
            <h4 className="card-title"></h4>
            {loading?
            <div style={{paddingLeft:"500px",paddingTop:"200px"}}>
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
        </div>}
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </>
    );
  }






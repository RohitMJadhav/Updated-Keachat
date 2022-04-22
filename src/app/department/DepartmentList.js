// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { ProgressBar } from 'react-bootstrap';
// import Axios from "axios";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';

// function DepartmentList(){
//   const [users, setUsers] = React.useState([]);
//     const url="https://reqres.in/api/users"

//   React.useEffect(() => {
//     Axios.get(url).then((response) => {
//       setUsers(response.data.data);
//     });
//   }, []);

//     const updateTableList=
//       users.map(function(user){
//         return   <tr align = "center" key={user.id}>
//           <td> {user.first_name} </td>
//           <td>
//             <p>{user.description}</p>
//           </td>
//           {/* <td>{user.Action}</td> */}
                         
//           <td><div className="btn-group" role="group" aria-label="Basic example">
//           <Tooltip title = "Edit">
//                            <Button variant="outlined" className = "btn_green" ><EditIcon fontSize="small"/></Button></Tooltip>
//                            <Tooltip title = "Delete">
//                            <Button variant="outlined"  className = "btn_red"><DeleteIcon fontSize="small"/></Button></Tooltip>
//                          </div></td>
//        </tr>
//       })

//     return (
//       <div>
//         <div className="page-header">
//           <h3 className="page-title"> Departments </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}></a></li>
//               <li> <Link to="/department/DepartmentAdd"> <button type="button" className='btn btn-primary'>Add Department</button></Link></li>
//               <li className="breadcrumb-item active" aria-current="page"></li>
//             </ol>
//           </nav>
//         </div>
//         <div className="row">
        
//           <div className="col-lg-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title"></h4>
                
//                 <div className="table-responsive">
//                   <table className="table table-striped">
//                     <thead>
//                       <tr align ="center">
//                         <th> Name </th>
//                         <th> Description </th>       
//                         <th> Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                    {updateTableList}
                          
                     
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     );
//   }


// export default DepartmentList



import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import Axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import  { useState,useEffect} from 'react'
// import { ProgressBar } from 'react-bootstrap';

// import AgentAdd from './AgentAdd';


function DepartmentList(){
  const [employees, setEmployees] = useState([])
  const [popup, setPopup] = useState(false);
  const URL='https://jsonplaceholder.typicode.com/users'
    // const URL="https://reqres.in/api/users/2"

    

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {

      const response = await Axios.get(URL)
      setEmployees(response.data)
  }

  const removeData = (id) => {

      Axios.delete(`${URL}/${id}`).then(res => {
          const del = employees.filter(employee => id !== employee.id)
          setEmployees(del)
          setPopup(true);
      })
  }

  const renderHeader = () => {
      let headerElement = [ 'id', 'name', 'email', 'phone', 'operation']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  function editForm(){
    alert("hello how are you");
    
  }

  const renderBody = () => {
    return employees && employees.map(({ id, name, email, phone }) => {
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name} </td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className='opration'>
                 <button type='button' className='btn btn-dark' onClick={editForm } >Edit</button>
                 
                    <button type="button" className="btn btn-danger" onClick={() => removeData(id)}>Delet</button>
                    {/* <Tooltip title = "Delete"> <Button variant="outlined"  className = "btn_red" onClick={() => removeData(id)}><DeleteIcon fontSize="small"/></Button></Tooltip> */}
                </td>
            </tr>
        )
    })
}



  return(<>

     {/* <h1 id='title'>React Table</h1> */}
        {/* <table id='employee'> */}
        <div>
       
    <div className="page-header">
       <h3 className="page-title"> Department</h3>
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>AgentAdd</a></li> */}
           <li> <Link to="/department/DepartmentAdd"> <button type="button" className='btn btn-primary'>Add Department</button></Link></li>
            {/* <li className="breadcrumb-item active" aria-current="page">List</li> */}
         </ol>
       </nav>
     </div>
     <div className="row">
    
       <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
           <div className="card-body">
            <h4 className="card-title"></h4>
            
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
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </>

    );
  }


export default DepartmentList

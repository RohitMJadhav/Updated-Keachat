import React, { Component,useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { useForm } from 'react-hook-form';
import Axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

function GroupAdd(){

  const [passwordShown,setpasswordShown] = useState(false);
  const togglePassword =()=>{
    setpasswordShown(!passwordShown);
  }
 
  const [confirmpasswordShown,setconfirmpasswordShown] = useState(false);
  const toggleConfirmPassword =()=>{
    setconfirmpasswordShown(!confirmpasswordShown);
  }
 
 const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = data => {
  Axios
   .post(
    "https://reqres.in/api/users",
       data,
    )
   .then(response => {console.log(response.data)})
   .catch(error => {console.log(error.data)});
};

  // const onSubmit = (data) => console.log(data);


    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Group</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Group</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li> */}

        <li> <Link to="/group/GroupList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
               
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <label htmlFor="username" className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-5">
                    
                    <input
                    type="text" 
                    className="form-control"
                    id="username" 
                    placeholder="Username"
                    autoComplete='off'
                    {...register('username',{required:"Name is required" ,minLength:2, maxLength:20})}
                    />
                    {errors.username && <p className='msg'>*First name will be more than 2 words*</p>}
                    
                    </div>

                    <div className="row">
                    <label htmlFor="client" className="col-sm-1 col-form-label">Client</label>
                    <div className="col-sm-5">

                     <input
                    type="text" 
                    className="form-control" 
                    id="client" 
                    placeholder=" "
                    autoComplete='off'
                    />
                    {errors.password && <p className='msg'>*Please check the Password*</p>}
                    <VisibilityIcon onClick = {togglePassword} fontSize="small"/>
                   
                    </div>
                    </div>
                    </div>
                  
                    <div className="row">
                    <label htmlFor="email" className="col-sm-1 col-form-label">Email</label>
                    <div className="col-sm-5">
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="abc@gmail.com" 
                    autoComplete='off'
                    {...register("email",{required:"Email is required"})}/>
                    {errors.email && <p className='msg'>*Email is required.*</p>}
                   
                    
                    </div>

                    <label htmlFor="confirmpassword" className="col-sm-1 col-form-label">Confirm Password</label>
                    <div className="col-sm-5">
                    
                    <input
                    type={confirmpasswordShown ? "text" : "password"}
                    className="form-control"
                    id="confirmpassword" 
                    placeholder="...."
                    autoComplete='off'
                    required
                    
                    />
                    {errors.password && <p className='msg'>*Please check the Password*</p>}
                    <VisibilityIcon onClick = {toggleConfirmPassword} fontSize="small"/>
                    </div>
                    </div>
                  
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button> 
                  
               
                  </form>
            </div>
           </div>
          </div>
          </div>
          </div>
             
    )
  
    }

export default GroupAdd;



// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';

// export class GroupAdd extends Component {
 

//   state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   componentDidMount() {
//     bsCustomFileInput.init()
//   }

  


//   render() {
//     return (
//       <div>
//         <div className="page-header">
//           <h3 className="page-title"> Group </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Group</a></li>
//               <li className="breadcrumb-item active" aria-current="page">Add</li>
//             </ol>
//           </nav>
//         </div>
//         <div className="row">
         
//           <div className="col-md-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
               
//                 <form className="forms-sample">
//                   <Form.Group className="row" >
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Name</label>
//                     <div className='col-sm-4'>
//                     <Form.Control type="text-area" className="form-control" id="exampleInputUsername2" placeholder="Username" /><br/>
//                     </div>
                  
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Department</label>
//                     <div className='col-sm-4'>
//                     <Form.Control type="text" className="form-control" id="exampleInputUsername2"  placeholder="Department id" /><br/>
                    
//                     </div>
//                     </Form.Group>
                    
//                     <Form.Group className="row" >
                                    
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Description</label>
//                    <div className='col-sm-4'>
//                     <textarea className="form-control" id="exampletextarea" rows="6" placeholder='Description'></textarea> 
//                     </div>
//                     </Form.Group>
                 
                  

//                   <div className="form-check">
                   
//                   </div>
//                   <button type="submit" className="btn btn-primary mr-2">Submit</button>  <button className="btn btn-light">Cancel</button>
                  
                
//                 </form>
//               </div>
//             </div>
//           </div>
//               </div>
//              </div>
      
//     )
//   }
// }

// export default GroupAdd

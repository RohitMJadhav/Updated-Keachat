import React, { Component,useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { useForm } from 'react-hook-form';
import Axios from "axios";
import {Link} from "react-router-dom"

function AgentAdd(){
 
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
          <h3 className="page-title"> Agent </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Agent</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li> */}
              <li> <Link to="/agent/AgentList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
               
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <label htmlFor="fname" className="col-sm-1 col-form-label">First Name</label>
                    <div className="col-sm-5">
                    
                    <input
                    type="text" 
                    className="form-control"
                    id="fname" 
                    placeholder="first name"
                    autoComplete='off'
                    {...register('fname',{required:"First Name is required"})}
                    />
                    {errors.fname && <p className='msg'>*First name will be more than 3 words*</p>}
                    
                    </div>

                    <label htmlFor="lname" className="col-sm-1 col-form-label">Last Name</label>
                    <div className="col-sm-5">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="lname" 
                    placeholder="last name" 
                    autoComplete='off'
                    {...register("lname",{required:"Last Name is required"})}/>
                    {errors.lname && <p className='msg'>*Last name will be more than 3 words*</p>}
                    </div>
                    </div>

                    <div className="row">
                    <label htmlFor="contact" className="col-sm-1 col-form-label">Group</label>
                    <div className="col-sm-5">

                     <input
                    type="text" 
                    className="form-control" 
                    id="group" 
                    placeholder=" "
                    autoComplete='off'
                    />
                    </div>
                    <label htmlFor="shift" className="col-sm-1 col-form-label">Shift</label>
                    <div className="col-sm-5">
                    <input
                    type="text" 
                    className="form-control" 
                    id="shift" 
                    placeholder=" "
                    autoComplete='off'
                    />
                    
                    </div>
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
                    </div>
                    <label htmlFor="language" className="col-sm-1 col-form-label">Language</label>
                    <div className="col-sm-5">
                    <select name="title" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                                <option value=""></option>
                                <option value="Mr">English</option>
                                <option value="Mrs">Marathi</option>
                                <option value="Miss">Hindi</option>
                            </select>
                            <div className="invalid-feedback">{errors.title?.message}</div>
                  </div>
                  </div>
                  
                  <div className="row">
                    <label htmlFor="contact" className="col-sm-1 col-form-label">Contact</label>
                    <div className="col-sm-5">

                     <input
                    type="tel" 
                    className="form-control" 
                    id="contact" 
                    placeholder="Enter your contact"
                    autoComplete='off'
                    {...register("contact",{validate:(value)=>value.length>9 && value.length<11 })}
                    />
                    {errors.contact && <p className='msg'>*contact number will be 10 digits.*</p>}
                    </div>
                    <label htmlFor="address" className="col-sm-1 col-form-label">Address</label>
                    <div className="col-sm-5">
                    <input
                    type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="address"
                    autoComplete='off'
                    {...register("address",{required:"Adress is required"},{validate:(value)=>value.length>15 || value.length<30 })}
                    />
                    {errors.address && <p className='msg'>*Address is required.*</p>}
                    
                    </div>
                  </div>

                  <div className="row">
                    <label htmlFor="contact" className="col-sm-1 col-form-label">City</label>
                    <div className="col-sm-5">

                     <input
                    type="text" 
                    className="form-control" 
                    id="city" 
                    placeholder="city"
                    autoComplete='off'
                    {...register("city",{required:"city is required"})}
                    />
                    {errors.city && <p className='msg'>*please mention your city*</p>}
                    </div>
                    <label htmlFor="address" className="col-sm-1 col-form-label">State</label>
                    <div className="col-sm-5">
                    <input
                    type="text" 
                    className="form-control" 
                    id="state" 
                    placeholder="state"
                    autoComplete='off'
                    {...register("state",{required:"state is required"})}
                    />
                    {errors.state && <p className='msg'>*state is required.*</p>}
                    
                    </div>
                  </div>


                  <div className="row">
                    <label htmlFor="contact" className="col-sm-1 col-form-label">Country</label>
                    <div className="col-sm-5">

                     <input
                    type="text" 
                    className="form-control" 
                    id="country" 
                    placeholder="Country"
                    autoComplete='off'
                    {...register("country",{required:"country is required"})}
                    />
                    {errors.country && <p className='msg'p>*please mention your country*</p>}
                    </div>
                    <label htmlFor="pincode" className="col-sm-1 col-form-label">Pincode</label>
                    <div className="col-sm-5">
                    <input
                    type="text" 
                    className="form-control" 
                    id="pincode" 
                    placeholder="pincode"
                    autoComplete='off'
                    {...register("pincode",{validate:(value)=>value.length>5 && value.length<7 })}
                    />
                    {errors.pincode && <p className='msg'>* Pincode will be more than 5 digits.*</p>}
                    
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

export default AgentAdd;





// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';

// export class BasicElements extends Component {


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
//           <h3 className="page-title"> Organization </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Organization</a></li>
//               <li className="breadcrumb-item active" aria-current="page">Add</li>
//             </ol>
//           </nav>
//         </div>
//         <div className="row">

//           <div className="col-md-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
//                 <form className="forms-sample">
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Name</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="Username" />
//                     </div>
//                     <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Email</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="email" className="form-control" id="exampleInputEmail2" placeholder="abc@gmail.com" />
//                     </div>
//                   </Form.Group>
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Contact</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="98223354**" />
//                     </div>
//                     <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Address</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="Address" />
//                     </div>
//                   </Form.Group>
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">City</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="City" />
//                     </div>
//                     <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">State</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="State" />
//                     </div>
//                   </Form.Group>
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Country</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="Country" />
//                     </div>
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Pincode</label>
//                     <div className="col-sm-4">
//                       <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="Pincode" />
//                     </div>
//                   </Form.Group>


//                   <div className="form-check">

//                   </div>
//                   <button type="submit" className="btn btn-primary mr-2">Submit</button>
//                   <button className="btn btn-light">Cancel</button>
//                 </form>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>




//     )
//   }
// }

// export default BasicElements






// import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';

// export class AgentAdd extends Component {
 

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
//           <h3 className="page-title"> Agent </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Agent</a></li>
//               <li className="breadcrumb-item active" aria-current="page">Add</li>
//             </ol>
//           </nav>
//         </div>
//         <div className="row">
         
//           <div className="col-md-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
//                 <form className="forms-sample">
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputUsername2" className="col-sm-1 col-form-label">First Name</label>
//                     <div className="col-sm-5">
//                     <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="First name" />
//                     </div>
//                     <label htmlFor="exampleInputEmail2" className="col-sm-1 col-form-label">Last Name</label>
//                     <div className="col-sm-5">
//                     <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="last name" />
//                     </div>
//                   </Form.Group>
//                   <Form.Group className="row">
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Group</label>
//                     <div className="col-sm-4">
                    
//                     <select name="group_id" className="form-control"   id="group_id">
//                     <option value="group_id">select group id</option>
//                     <option value="a">A</option>
//                     <option value="b">B</option>
//                     <option value="c">C</option>
//                     </select>
                   
//                     </div>
                    
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Shift</label>
//                     <div className="col-sm-4">
                    
//                     <select name="shift_id" className="form-control"  id="shift_id">
//                     <option value="shift id">Select Shift id</option>
//                     <option value="a">A</option>
//                     <option value="b">B</option>
//                    <option value="c">C</option>
//                    </select>
//                     </div>

//                     </Form.Group>
//                   <Form.Group className="row">
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Client</label>
//                     <div className="col-sm-4">
                    
//                     <select name="client_id" className="form-control"   id="group_id">
//                     <option value="client_id">Select client id</option>
//                     <option value="a">A</option>
//                     <option value="b">B</option>
//                     <option value="c">C</option>
//                     </select>
//                     </div>
                    
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Language</label>
//                     <div className="col-sm-4">
                    
//                     <select name="group_id" className="form-control" id="group_id">
//                     <option value="shift_id">Select Language</option>
//                     <option value="a">English</option>
//                     <option value="b">Marathi</option>
//                     <option value="c">Hindi</option>
//                     </select>
                   
//                     </div>

//                   </Form.Group>
//                   <Form.Group className="row">
//                   <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Address</label>
//                     <div className="col-sm-4">
//                     <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="Address" />
//                     </div>
//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">City</label>
//                     <div className="col-sm-4">
//                     <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="City" />
//                     </div>
//                   </Form.Group>
//                   <Form.Group className="row">
//                     <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">State</label>
//                     <div className="col-sm-4">
//                     <Form.Control type="text" className="form-control" id="exampleInputEmail2" placeholder="State" />
//                     </div>

//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Country</label>
//                     <div className="col-sm-4">
//                     <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="Country" />
//                     </div>
                    
//                   </Form.Group>
                  
//                   <Form.Group className="row">
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Pincode</label>
//                     <div className="col-sm-4">
//                     <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="Pincode" />
//                     </div>
//                     </Form.Group>
                  

//                   <div className="form-check">
                   
//                   </div>
//                   <button type="submit" className="btn btn-primary mr-2">Submit</button>
//                   <button className="btn btn-light">Cancel</button>
//                 </form>
//               </div>
//             </div>
//           </div>
          
//               </div>
//             </div>
         
      
             
      
//     )
//   }
// }

// export default AgentAdd




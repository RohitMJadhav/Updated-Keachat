import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { useForm } from 'react-hook-form';
import "./OrganizationAdd.css"
import Axios from "axios";

function OrganizationAdd(){
 
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
          <h3 className="page-title"> Organization </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Organization</a></li> */}
              <li> <Link to="/organization/Organizationlist"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
              {/* <li className="breadcrumb-item active" aria-current="page">Add</li> */}
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
               
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <label htmlFor="fname" className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-5">
                    
                    <input
                    type="text" 
                    className="form-control"
                    id="fname" 
                    placeholder="Username"
                    autoComplete='off'
                    {...register('fname',{required:"Name is required" ,minLength:2, maxLength:20})}
                    />
                    {errors.fname && <p className='msg'>*First name will be more than 2 words*</p>}
                    
                    </div>

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

export default OrganizationAdd;





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

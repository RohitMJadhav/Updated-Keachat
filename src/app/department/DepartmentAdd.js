import React from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";
import {Link} from "react-router-dom"

function DepartmentAdd(){
 
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
          <h3 className="page-title"> Department</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Department</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li> */}
                <li> <Link to="/department/DepartmentList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
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
                    {...register('fname',{required:"Name is required"})}
                    />
                    {errors.fname && <p className='msg'>*First name will be more than 3 words*</p>}
                    
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

export default DepartmentAdd;





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
// import { Link, withRouter } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import bsCustomFileInput from 'bs-custom-file-input';

// export class DepartmentAdd extends Component {
 

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
//           <h3 className="page-title"> Department </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Department</a></li>
//               <li className="breadcrumb-item active" aria-current="page">Add</li>
//             </ol>
//           </nav>
//         </div>
//         <div className="row">
         
//           <div className="col-md-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
               
//                 <form className="forms-sample">
//                 <Form.Group className="row" >
//                   <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Name</label>
//                     <div className='col-sm-4'>
//                     <Form.Control type="text-area" className="form-control" id="exampleInputUsername2" placeholder="Username" /><br/>
//                     </div>

//                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >Organization</label>
//                     <div className='col-sm-4'>
//                     <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="Organization id" /><br/>
//                     </div>
//                     </Form.Group>
//                     <Form.Group className="row" >
                                    
//                                     <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Description</label>
//                                      <div className='col-sm-4'>
//                                       <textarea className="form-control" id="exampletextarea" rows="6" placeholder='Description'></textarea> 
//                                       </div>
//                                       </Form.Group>
                 

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

// export default DepartmentAdd

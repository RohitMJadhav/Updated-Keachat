import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import DeleteIcon from '@mui/icons-material/Delete';


export class Language extends Component {
 

  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    bsCustomFileInput.init()
  }

  


  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Language </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Language</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <form className="forms-sample">
                  <Form.Group className="row" >
                                    
                  <label htmlFor="exampleInputUsername2" className="col-sm-1.2 col-form-label">Language</label>
                    <div className="col-sm-4">
                    
                    <select name="group_id" className="form-control" id="group_id">
                    <option value="shift_id">Select Language</option>
                    <option value="a">English</option>
                    <option value="b">Marathi</option>
                    <option value="c">Hindi</option>
                    </select>
                   
                    </div>
                    </Form.Group>
                 
                  

                  <div className="form-check">
                   
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>  <button className="btn btn-light">Cancel</button>
               
                  
                
                </form>
              </div>
            </div>
          </div>
              </div>
             </div>
      
    )
  }
}

export default Language

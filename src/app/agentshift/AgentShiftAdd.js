import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';

export class AgentShiftAdd extends Component {
 

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
          <h3 className="page-title"> AgentShift </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Agent Shift</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li> */}
              <li> <Link to="/agentshift/AgentShiftList"> <button type="button" className='btn btn-primary'>Back</button></Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <form className="forms-sample">
                  <Form.Group className="row" >
                    <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" > Shift Name</label>
                    <div className='col-sm-4'>
                    <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="shift name" /><br/>
                    </div>

                    <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >Organization</label>
                    <div className='col-sm-4'>
                    <Form.Control type="number" className="form-control" id="exampleInputUsername2" placeholder="Organization id" /><br/>
                    </div>

                    </Form.Group>

                    <Form.Group className="row" >

                    <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >Start Time</label>
                    <div className='col-sm-4'>
                    <Form.Control type="time" className="form-control" id="exampleInputUsername2" placeholder="select time" /><br/>
                    </div>

                    <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label" >End Time</label>
                    <div className='col-sm-4'>
                    <Form.Control type="time" className="form-control" id="exampleInputUsername2" placeholder="select time" /><br/>
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

export default AgentShiftAdd
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';

export class Question extends Component {


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
          <h3 className="page-title"> Question </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Question</a></li>
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
                    <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label">Question number</label>
                    <div className="col-sm-3">
                      <Form.Control type="number" autocomplete = "off" className="form-control" id="exampleInputUsername2" placeholder="" />
                    </div>

                    <label htmlFor="exampleInputUsername2" className="col-sm-1 col-form-label">Question</label>
                    <div className="col-sm-5">
                      <Form.Control type="text" autocomplete = "off" className="form-control" id="exampleInputUsername2" placeholder="Type here" />
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

export default Question

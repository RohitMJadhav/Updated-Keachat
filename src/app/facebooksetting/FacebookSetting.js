import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';

export class FacebookSetting extends Component {


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
                    <h3 className="page-title"> Facebook Setting </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Facebook Setting</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Add</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">

                                <form className="forms-sample">
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-1 col-form-label">Client</label>
                                        <div className="col-sm-5">
                                            <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
                                        </div>

                                        <label htmlFor="exampleInputUsername2" className="col-md-2 col-form-label">Page Access Token</label>
                                        <div className="col-sm-4">
                                            <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
                                        </div>


                                        
                                    </Form.Group>


                                    <Form.Group className="row">
                                    <label htmlFor="exampleInputUsername2" className="col-sm-1 col-form-label">Page</label>
                                        <div className="col-sm-5">
                                            <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
                                        </div>
                                       

                                        <label htmlFor="exampleInputEmail2" className="col-sm-2 col-form-label">Verify Token</label>
                                        <div className="col-sm-4">
                                        <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="" />
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

export default FacebookSetting

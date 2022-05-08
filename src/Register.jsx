import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register=()=>{
    return(
        <Fragment>
            <div>
                <div style={{width:'40%'}} className="border border-info rounded offset-lg-4 mt-5">
                   <h2 className="bg-info text-light">User Registration Form</h2>
                   <form className="p-4">
                       <div className="form-group">
                            <label htmlFor="username" className="float-left">Fullname</label>
                            <input type="text" name="name" className="form-control" autoComplete="off"/>
                       </div>
                       <div className="form-group">
                            <label htmlFor="email" className="float-left">Email</label>
                            <input type="text" name="email" className="form-control" autoComplete="off"/>
                       </div>
                       <div className="form-group">
                            <label htmlFor="Phone" className="float-left">Phone</label>
                            <input type="text" name="phone" className="form-control" autoComplete="off"/>
                       </div>
                       <div className="form-group">
                            <label htmlFor="password" className="float-left">Password</label>
                            <input type="password" name="password" className="form-control" autoComplete="off"/>
                       </div>
                       <div className="form-group">
                            <button className="btn btn-success btn-md m-2">Submit</button>
                            <button className="btn btn-danger btn-md">Cancel</button>
                       </div>
                       
                   </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;
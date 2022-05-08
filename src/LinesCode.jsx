import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const myStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
   
}

const LinesCode=(props) =>{
    const [data, setData] = useState({
          fname:"",
          lname:"",
          email:"",
          phone:"",
    });
    
    const inputValue = (event) =>{
      /*
      console.log(event.target.value);
      console.log(event.target.name);
      console.log(event.target.placeholder)
      const value = event.target.value;
      const name = event.target.name;  
      setData((preValue) => {
          // console.log(preValue)
            if(name === 'fname'){
                return{
                    fname: value,
                    lname: preValue.lname
                }
            }else if(name === 'lname'){
                return{
                    fname: preValue.fname,
                    lname: value,
                }
            }
        })
      */
        
      //if using spread operator
      const  {name, value} = event.target;

      setData((preValue) => {
          console.log(preValue);

          return {
              ...preValue,
              [name]: value,
          }
      });

    }


    const onSubmits = (event) => {
        event.preventDefault();
        alert('form submitted')
    }
    
    return (
      <Fragment>
        <form onSubmit={onSubmits}>
          <div style={myStyle}>
            <h1>Hello {data.fname} {data.lname}  </h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25"
              name="fname"
              placeholder={"Please Enter Your First Name"}
              onChange={inputValue}
              value={data.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="form-control w-25 mt-3"
              name="lname"
              onChange={inputValue}
              value={data.lname}
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="form-control w-25 mt-3"
              name="email"
              onChange={inputValue}
              value={data.email}
            />
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="form-control w-25 mt-3"
              name="phone"
              onChange={inputValue}
              value={data.phone}
            />
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
    
}


export default LinesCode;
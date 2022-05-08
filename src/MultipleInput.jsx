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

const MultipleInput=(props) =>{
    const [data, setData] = useState({
          fname:"",
          lname:"",
    });
    
    const inputValue = (event) =>{
        //console.log(event.target.value);
        //console.log(event.target.name);
        //console.log(event.target.placeholder)

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
    }


    const onSubmits = (event) => {
            event.preventDefault();
            alert('form submitted');
    }
    
    return (
      <Fragment>
        <form onSubmit={onSubmits}>
          <div style={myStyle}>
            <h1>Hello {data.fname} {data.lname}  </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25"
              name="fname"
              placeholder={"Please enter your first name"}
              onChange={inputValue}
              value={data.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25 mt-3"
              name="lname"
              onChange={inputValue}
              value={data.lname}
            />
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
    
}


export default MultipleInput;
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

const Input=(props) =>{
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullname, setFullname] = useState();
    const [newLastName, setNewLastName] = useState();
    
    const inputValue1 = (event) =>{
        console.log(event.target.name)
        setName(event.target.value)   
    }
    
    const inputValue2 = (event) =>{
        setLastName(event.target.value)
    }

    const onSubmits = (event) => {
        event.preventDefault();
        setFullname(name)
        setNewLastName(lastName);
    }
    
    return (
      <Fragment>
        <form onSubmit={onSubmits}>
          <div style={myStyle}>
            <h1>Hello {fullname} {newLastName} </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25"
              name="fname"
              onChange={inputValue1}
              value={name}
            />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25 mt-3"
              name="fname"
              onChange={inputValue2}
              value={lastName}
            />
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
    
}


export default Input;
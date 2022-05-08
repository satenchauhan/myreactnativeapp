import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Onlcick=(props) =>{
    const [name, setName] = useState('');
    const [fullname, setFullname] = useState();
    const inputValue = (event) =>{
        console.log(event.target.name)
        setName(event.target.value)
    }

    const onSubmit = () => {
        setFullname(name)
    }
    return (
        <Fragment>
           <div  style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'10px'}}>
               <h1>Hello {fullname} </h1>
               <input type="text"  
                    placeholder="Enter Your Name" 
                    className="form-control w-25" 
                    name="fname"
                    onChange={inputValue}
                    value={name}
                />
               <button onClick={onSubmit} className="btn btn-success mt-2">Submit</button>
           </div>
        </Fragment>
    );
    
}


export default Onlcick;
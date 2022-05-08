import React, {useReducer,useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* 
import Navigation from './Navigation';
import './mystyle.css'
import Home from './Home';
import Register from './Register';
import SpreadOP from './SpreadOP';
import ToDo from './ToDo'; 
import Test from './Test';
*/



const  App = (props) => {
  const [show, setShow] = useState(false)
    const luckyName = useRef("Amu");


    const submitForm = (e) =>{
       e.preventDefault();
       const name = luckyName.current.value;
       name == "" ? alert("Please fill the data") : setShow(true);
       

    }

    return(
      <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:40}}>
          <div>
              <h1 style={{color:'red'}}>App Component <br/></h1>
              <form action="" onSubmit={submitForm}>
                 <div>
                    <label htmlFor="luckyName"> Enter your luckyName </label>
                    <input type="text" id="luckyName" ref={ luckyName }  />
                 </div>
                 <button>Click</button>
              </form>
      
             <p>{ show ? `${luckyName.current.value}` : `${luckyName }` }</p>

             <a href="https://www.googlefindcode.com">click</a>

          </div>
           <a href="intent:#Intent;scheme=satenapp;package=com.satenapp;end">click here</a>

          <a href="intent:#Intent;scheme=satenapp://about;package=com.satenapp;end">click here</a>
      </div>
    );
  }


export default App;

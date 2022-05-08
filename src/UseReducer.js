import React, {useReducer} from 'react';
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

const initialState = 0;

const reducer = (state, action) =>{
   if(action.type==='ADDITION'){
       return state +1;
   }
   if(action.type==='SUBTRUCTION'){
    return state -1;
}
    return state;
}

const  UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
      <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:40}}>
          <div>
              <h1 style={{color:'red'}}>App Component <br/></h1>
              <div>
                <h1>{state}</h1>
              </div>
              <button onClick={() => dispatch({type: 'ADDITION'})}>Add +</button>
              <button onClick={() => dispatch({type: 'SUBTRUCTION'})}>Min -</button>
          </div>
      </div>
    );
  }


export default UseReducer;

import React, {Component, useState, useEffect} from 'react';
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
import {connect} from 'react-redux';
import UpdateAction  from './reducers/UpdateAction'


const  Myredux = (props) => {
   console.log(props)
    return(
      <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:40}}>
          <div>
              <h1 style={{color:'red'}}>App Component</h1>
              <div>
                <h1>My Name: {props.myname}</h1>
                <h1>My City: {props.mycity}</h1>
                <h1>My Country: {props.country}</h1>
                <h1>My Favourite: {props.myfavourites}</h1>
              </div>

              <button onClick={() =>{props.changeName('Amson Chauhan')}}>Click to Change</button>
          </div>
      </div>
    );
  }

const mapStateToProps = (state) =>{
    return {
       myname: state.name,
       mycity: state.city,
       mycountry: state.country,
       myfavourites: state.favourites,
    }
}

const mapDspatchToProps = (dispatch) =>{
   return {
      changeName:(name)=>{dispatch(UpdateAction(name))}
   }
}
export default connect(mapStateToProps,mapDspatchToProps)(Myredux);

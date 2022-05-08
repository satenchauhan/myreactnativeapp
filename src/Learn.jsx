import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import name,{ShowCity, ShowCountry, Add, Substract, Multiply, Divide, work} from './Imp&Exp';
// import Card from './Card';
import './card.css'
import MovieData from './MovieData';
import Nextflix from './Nextflix';
import Amazon from './Amazon';
// import * as data from './Imp&Exp';

const heading ={
    color:'blue', 
    fontWeight:'bold' ,
    fontSize:'50px',
}
const fname = "Saten";
const lname  = "Chauhan"

// const showCard=(val)=>{
//     return(
//         <Card 
//             movieName={val.movieName}
//             movieImg={val.movieImg}
//             title={val.title}
//             link={val.link}
//         />
//     );
// };

{/* IF ELSE CONDITION */}
const favMovie = 'Dark';
const Fav=()=>{
    if(favMovie==MovieData[0].movieName){
        return <Nextflix />
    }else{
       return <Amazon /> 
    }
};






const Learn=(props) =>{
    // useState() means destructring
    const [num, setNum] = useState(0);
    const AddNum=()=>{
        setNum(addCount => addCount +1)
    }
    const MinNum=()=>{
        setNum(minCount => minCount -1)
    }
    return (
        <div className="">
             {/* 
            <h1>This is Home Page</h1>
            <h2 style={{color:'red', textDecoration:'underline'}}>This is inline css style</h2>
            <h2 style={heading}>This is Internal css style</h2>
            <h3> {`I am ${fname} ${lname}`} </h3>
            <h1>Import and Export </h1>
            
            <h4>{`He is ${name} and He is a ${work}`}</h4>
            <h4>{`He is from ${ShowCity()} ${ShowCountry()}`}</h4>
           
           
            <h4>{`He is ${data.default} `}</h4>
            <h4>{`He is ${data.work} `}</h4>
            <h4>{`He is belong ${data.showCity()} City`}</h4>
            <h4>{`He is from ${data.showCountry()} `}</h4>
            
            <h1>Calculator</h1>
            <h5> {`Addition = ${Add(10,9)}`} </h5>
            <h5> {`Addition = ${Substract(20,7)}`} </h5>
            <h5> {`Addition = ${Multiply(12,4)}`} </h5>
            <h5> {`Addition = ${Divide(50,4)}`} </h5>
            */}
            <h1 className="heading_style">List of Top 5 Movies</h1>
            {/* Map Array Method */}
            {/*             
            {MovieData.map((val)=>{
                return(
                    <Card 
                        key={val.id}
                        movieName={val.movieName}
                        movieImg={val.movieImg}
                        title={val.title}
                        link={val.link}
                    />
                );
            })}
            */}
            {/* IF ELSE CONDITION */}
            {/* <Fav /> */}
            {/* Ternary operator */}
            {/* { favMovie==MovieData[0].movieName ? <Nextflix /> : <Amazon />} */}
            <button onClick={MinNum} className='btn btn-success'>- </button>
                <h2> { num } </h2>
            <button onClick={} className='btn btn-success'> + </button>
            {/* <button onClick={()=>setNum(num+1)} className='btn btn-success'> + </button> */}
        </div>
    );
}



export default Learn;
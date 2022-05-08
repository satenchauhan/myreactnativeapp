import React, { Fragment } from 'react'

/*
// 1st Method  
const name = ['Ram','Krishna'];
const data = [1, ...name, 'London'];
console.log(data);
*/

/*
// 2nd
const students = ['Ram','Sham','Vam','Daman','Namam','Tapan'];
const  courses = ['BBA','MBA','BCA','BTech','MTech','Bcom']
const details =[...students, ...courses];
console.log(details);
*/

/*
// 3rd
const students = ['Ram','Sham','Vam','Daman','Namam','Tapan'];
const [first, ...remaining] = students;
console.log(first);
console.log(remaining)
*/

/*
// 4th
const student = {
     name: "Raman",
     city: "Florence",
     country: "Italy"
}
const fulldata = {
     id: 1,
     ...student,
     age: 27,
     gender: 'Male'
}
console.log(fulldata);
*/

const SpreadOP = () =>{
    return(
        <Fragment>
            <div style={{backgroundColor:'#E5FEFE', height:'100vh', padding:50}}>
              
            </div>
        </Fragment>
    )
      

}


export default SpreadOP;
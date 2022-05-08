import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CssBg=(props) =>{
    const lightGreen = 'lightgreen';
    const [newBg, setBackground] = useState(lightGreen);
    const [name, setName] = useState('Click Me');
    const changeBg= () => {
         let purple = '#cd84f1';
         setBackground(purple);
         setName('Oops');
    }

    return (
        <Fragment>
            <div style={{backgroundColor: newBg, width:'600px', height:'600px', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <button onClick={changeBg} className='btn btn-success'>{name} </button>
            </div>
        </Fragment>
    );
    
}


export default CssBg;
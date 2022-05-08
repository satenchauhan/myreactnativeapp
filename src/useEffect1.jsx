import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const UseEffect1=(props) =>{
    const [windowWidth,setwindowWidth] = useState(window.innerWidth);
    const [windowHeight, setwindowHeight] = useState(window.innerHeight);
    const handleResize = () =>{
         setwindowWidth(window.innerWidth);
         setwindowHeight(window.innerHeight);    
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
           {windowWidth} 
           <br />
           {windowHeight}
        </div>   
    );
}



export default UseEffect1;
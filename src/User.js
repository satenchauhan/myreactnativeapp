import React from 'react';
import {useParams, useLocation} from 'react-router-dom'

/*
const User = ({match})=>{ //without hook
    return (
        <h1>User {match.params.name} page</h1>
    )
}
*/
const User = ()=>{ //with hook
    const {name, country} = useParams();
    const location = useLocation();
    return (
        <>
         <h1>User {name} {country} page</h1>
         {location.pathname==='/user/saten/india' ? (
            <button onClick={ () => alert("You clicked on me")}>Click On</button>
         ) 
         :null }

         </>
    )
}

export default User;
import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const UseEffect=(props) =>{
    const [resourceType, setResourceType] = useState('Posts');
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType]);
    return (
        <Fragment>
            <div className="mt-5">
                <button onClick={()=> setResourceType('posts')} className="btn btn-success m-2">Posts</button>     
                <button onClick={()=> setResourceType('users')} className="btn btn-success m-2">Users</button>     
                <button onClick={()=> setResourceType('comments')} className="btn btn-success m-2">Comments</button>     
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                 return <pre>{JSON.stringify(item)}</pre>
            })}
        </Fragment>
    );
}


export default UseEffect;
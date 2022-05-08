import React, { Component, useState, useEffect } from 'react';

const TestTwo= () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        alert("We are in useEffect whicj in being rendered")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(
                (data) =>{
                   setPosts(data);
                //   console.log(data.body)
                }
            );
    },[]);
    return(
        <div>
            <h2>All Posts</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.userId}</td>
                        </tr>
                    ))}
                    {/* 
                        <tr key={posts.id}>
                            <td>{posts.id}</td>
                            <td>{posts.title}</td>
                            <td>{posts.body}</td>
                            <td>{posts.userId}</td>
                        </tr>
                    */}
                </tbody>
            </table>
        </div>
    );
}


export default  TestTwo;
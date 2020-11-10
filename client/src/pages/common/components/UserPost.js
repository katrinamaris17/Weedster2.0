import React, { useState } from 'react';


export default function() {
    const [post, setPost] = useState("Write your post here");

    const changeHandler = (e) => {
        console.log(e.target.value);
        setPost(e.target.value)
    }

    const clickHandler = () => {
        console.log("Hey there!", post)
        fetch("/apix/post", {
            method: "post", 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({post})
        })
        .then(r=>r.json())
        .then(r=>{console.log(r)})
    }
    return (
        <>
            <textarea rows="5" cols="100" onChange={changeHandler}>{ post }</textarea>
            <button onClick={clickHandler}>Submit</button>
        </>
    ) 
}


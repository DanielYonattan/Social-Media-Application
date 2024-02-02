import './postbox.css'
import React from "react"

async function postTweet(){ 
        const tweet = document.querySelector('#tweet').value

        await fetch("http://localhost:3000/api/posts/", {
            method: 'POST',
            headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
            mode: 'cors',
            body: JSON.stringify({
                "userId": "65b32a65a3fb52afff8e3d8c",
                "tweet": tweet
            }
            )
        })
    }  

export default function Postbox() { 
    return (  
        <div id="postbox">
            <label for="name">from:</label>
            <input type="text" id="tweet" placeholder="What's going on" />
            <button id='tweet-button' onClick={(() => postTweet())}> Tweet</button>
      </div>
    )
}
import './postbox.css'
import React from "react"
import Feed from '../pages/Feed.js'

async function postTweet(){ 
        const user = localStorage.getItem("user")
        const tweet = document.querySelector('#tweet').value

        await fetch("http://localhost:3000/api/posts/", {
            method: 'POST',
            headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
            mode: 'cors',
            body: JSON.stringify({
                "userId": user,
                "tweet": tweet
            }
            )
        })
      
        
    }  

export default function Postbox() { 
    return (  
        <div id="postbox">
            <label for="name"></label>
            <input type="text" id="tweet" placeholder="What's going on" />
            <button id='tweet-button' onClick={(() => postTweet())}> Tweet</button>
      </div>
    )
}
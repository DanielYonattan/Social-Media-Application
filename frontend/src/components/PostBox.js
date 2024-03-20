import './postbox.css'
import React from "react"
import Feed from '../pages/Feed.js'
import Tweet from '../components/Tweet'

async function postTweet(posts, setPosts){ 
        const userId = localStorage.getItem("userId")
        const username = localStorage.getItem("username")

        let tweet = document.querySelector('#tweet').value


        try { 
            await fetch("http://localhost:3000/api/posts/", {
                method: 'POST',
                headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
                mode: 'cors',
                body: JSON.stringify({
                    "userId": userId,
                    "tweet": tweet,
                    "username": username
                }
                )
            })

            document.querySelector('#tweet').value = ""
    }
    catch(err) {
        console.log(err)
    }       
}  

export default function Postbox({setPosts}) { 
    return (  
        <div id="postbox">
            <label for="name"></label>
            <input type="text" id="tweet" placeholder=" What's going on" />
            <button id='tweet-button' onClick={(() => postTweet())}> Tweet</button>
            {setPosts}
      </div>
    )
}
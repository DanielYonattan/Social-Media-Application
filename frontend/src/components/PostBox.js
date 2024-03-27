import './postbox.css'
import React, { useCallback } from "react"
import Feed from '../pages/Feed.js'
import Tweet from '../components/Tweet'
import {URL} from '../index.js'


async function postTweet(setPosts){ 
        const userId = localStorage.getItem("userId")
        const username = localStorage.getItem("username")

        const tweet = document.querySelector('#tweet').value
        document.querySelector('#tweet').value = ""

        const tweetObj = {
            "userId": userId,
            "tweet": tweet,
            "username": username
        }

        try { 
            await fetch(`${URL}/api/posts/`, {
                method: 'POST',
                headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
                mode: 'cors',
                body: JSON.stringify(tweetObj)
            })

            const res = await fetch(`${URL}/api/posts/feed/${userId}`)
            const posts = await res.json()
            setPosts(posts) 
        }
        catch(err) {
            console.log(err)
        }       
    }  

export default function Postbox({posts, setPosts}) { 
    return (  
        <div id="postbox">
            <label for="name"></label>
            <input type="text" id="tweet" placeholder=" What's going on" />
            <button id='tweet-button' onClick={(() => { 
                postTweet(setPosts)
            }) }> Tweet</button>
      </div>
    )
}
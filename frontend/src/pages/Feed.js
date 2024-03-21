import './feed.css';
import Tweet from '../components/Tweet.js'
import Postbox from '../components/PostBox.js'
import React, {useState, useEffect, useContext, useReducer} from "react"
import {UserContext} from './Login.js'
import { AuthContext } from '../UserContext.js'
import Recs from '../components/Recs'


export default function Feed() {
  const auth = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const user = localStorage.getItem("userId")

  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`http://localhost:3000/api/posts/feed/${user}`)
      const posts = await res.json()
      setPosts(posts) 
    }  
    fetchPosts()  
  }, [])
  

  
 
  return ( 
    <div className='home'>
      <div className='leftBar'>
       <Recs />
      </div>

      <div className='feed'> 
    
        {posts.length > 0 ? (posts.map((tweet) => (
          <Tweet tweet={tweet} />
        ))) : console.log("empty feed")}


      </div> 

      <div className='rightBar'>
        <Postbox posts={posts} setPosts={setPosts} />
      </div>
    </div>
    
  );
} 
   
 

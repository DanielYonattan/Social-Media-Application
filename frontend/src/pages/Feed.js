import './feed.css';
import Tweet from '../components/Tweet.js'
import Postbox from '../components/PostBox.js'
import React, {useState, useEffect, useContext} from "react"
import {UserContext} from './Login.js'
import { AuthContext } from '../UserContext.js'


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
  
  if (posts == "") {
    return <Tweet tweet="empty" />
  }
  
  

 
  return ( 
    <div className='home'>
      <div className='leftBar'>

      </div>

      <div className='feed'> 
        {posts.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div> 

      <div className='rightBar'>
        <Postbox setPosts={setPosts} />
      </div>
    </div>
    
  );
} 
   
 

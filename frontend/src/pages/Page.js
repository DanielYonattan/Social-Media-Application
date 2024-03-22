import './page.css'
import React, {useState, useEffect} from "react"
import Tweet from '../components/Tweet.js'
import { useParams } from 'react-router';




export default function Page() {
    const [posts, setPosts] = useState([])
    const {userId} = useParams()
    console.log(userId)

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch(`http://localhost:3000/api/posts/${userId}`)
          const posts = await res.json()
          setPosts(posts) 
        }  
        fetchPosts()  
      }, [])


  return ( 

      <div className='feed'> 
    
        {posts.length > 0 ? (posts.map((tweet) => (
          <Tweet tweet={tweet} />
        ))) : console.log("empty feed")}

      </div> 
    
  );
}
import { useEffect, useState } from 'react'
import './recs.css' 
import {URL} from '../index.js'


function FollowCard({recs, setPosts}) {
    const [index, setIndex] = useState(0)
    const recsLen = recs.length
    const user = localStorage.getItem("userId")

    // follow the user
    async function handleClick() { 
        if (recsLen > 0) { 
        try { 
            await fetch(`${URL}/api/users/follow/${user}`, {
                    method: 'PUT',
                    headers: {'content-Type': 'application/json'},  
                    mode: 'cors',
                    body: JSON.stringify({
                        "userId": user,
                        "followId": recs[index]._id
    
                    })  
                }) 
            
            // refresh feed
            const res = await fetch(`${URL}/api/posts/feed/${user}`)
            const posts = await res.json()
            setPosts(posts) 
            }
            catch(err) {
                console.log(err)
            }

            // display next reconmendation
            setIndex((index + 1) % recsLen)
        }
    }
 
    return (
    <>
    <p>Follow an Account</p>

    <div className="recs">
        <div className="rec-1">
            <p>@ { recsLen > 0 ? recs[index].username : ""}
                <button onClick={handleClick}>follow</button>
            </p>
        </div>
    </div>
    </>
)
}




export default function Recs({setPosts}) {
    const user = localStorage.getItem("userId")
    const [recs, setRecs] = useState([])

    
    useEffect(() => {
        const getRecs = async () => {
            try {
                const res = await fetch(`${URL}/api/users/notfollowing/${user}`, {
                        method: 'GET',
                        headers: {'content-Type': 'application/json'},  
                        mode: 'cors',
                    }) 
                
                const recs = await res.json()
                console.log("oo"+recs)

                setRecs(recs)
                console.log("oo"+recs)
            }
            catch(err){
                console.log(err)
            }
        }
        getRecs()
        }, []) 

    


    return (
        <div className='recsbox'> 
            {recs.length > 0 ? <FollowCard recs={recs} setPosts={setPosts}/> : ""}
         </div>

        
    )
}
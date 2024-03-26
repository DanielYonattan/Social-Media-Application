import { useState } from 'react'
import './recs.css' 







function FollowCard() {
    const [index, setIndex] = useState(0)
    const trustedAccounts = [{"username": "apple", "userId":"66022aac3f126b720d27ff0a"}, 
                            {"username": "spotify", "userId":"66022ad43f126b720d27ff0c"},
                            {"username": "nike", "userId":"66022a993f126b720d27ff03"}];
    const user = localStorage.getItem("userId")


    async function handleClick() { 
        try { 
            await fetch(`http://localhost:3000/api/users/follow/${trustedAccounts[index].userId}`, {
                    method: 'PUT',
                    headers: {'content-Type': 'application/json'},  
                    mode: 'cors',
                    body: JSON.stringify({
                        "userId": user,
                        "followId": trustedAccounts[index].userId
    
                    })  
                }) 
            }
            catch(err) {
                console.log(err)
            }
            setIndex((index + 1) % 3)
        }
 
    return (
    <div className="recs">
        <div className="rec-1">
            <p>@ {trustedAccounts[index].username}
                <button onClick={handleClick}>follow</button>
            </p>
        </div>
    </div>
)
}




export default function Recs() {

    return (
        <div className='recsbox'> 
            <p>follow an account</p>
            {<FollowCard />}
         </div>

        
    )
}
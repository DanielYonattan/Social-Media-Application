import { useState } from 'react'
import './recs.css' 

export default function Recs() {
    async function follow(toFollow) {
    const user = localStorage.getItem("userId")

    try { 
        await fetch(`http://localhost:3000/api/users/follow/${user}`, {
                method: 'PUT',
                headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
                mode: 'cors',
                body: JSON.stringify({
                    "userId": user,
                    "followId": toFollow

                })
            })
        }
        catch(err) {
            console.log(err)
        }
}

    return (
        <div className='recsbox'> 
            <p>follow some accounts</p>
            <div className="recs">
                <div className="rec-1">
                    <p>@daniel
                    <button>follow</button>
                    </p>
                </div>
                <div className="rec-2">
                    <p>@daniel
                    <button onClick={() => follow("65f8cdfd26e7c546ec4ed05b")}> Follow </button>
                    </p>
                </div>
                <div className="rec-3">
                    <p>@daniel
                    <button>follow</button>
                    </p>
                </div>
         </div>

        </div>
        
    )
}
import "./tweet.css"
import { Link } from "react-router-dom";


export default function Tweet({tweet}) { 
    console.log(tweet)
    return (  
        <div className="tweet-container">
            <div className="poster-info">
               <Link to={"/page/"+tweet.userId}> {tweet.username} </Link> 
            </div>
            <div className="tweet">
                {tweet.tweet}
            </div>
        </div>
    )
}
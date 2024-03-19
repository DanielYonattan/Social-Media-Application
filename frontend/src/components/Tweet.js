import "./tweet.css"

export default function Tweet({tweet}) { 
    console.log(tweet)
    return (  
        <div className="tweet-container">
            <div className="poster-info">
               {tweet.username ? "@"+tweet.username :"@"+tweet.userId}
            </div>
            <div className="tweet">
                {tweet.tweet}
            </div>
        </div>
    )
}
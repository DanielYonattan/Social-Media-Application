import "./tweet.css"

export default function Tweet({tweet}) { 
    return (  
        <div className="tweet-container">
            <div className="tweet">
                {tweet.tweet}
            </div>
            <div className="reactions">
                hello
            </div>
        </div>
    )
}
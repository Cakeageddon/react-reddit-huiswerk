import React from "react";
import {Link} from "react-router-dom";

function HotPost({permalink, title, subreddit, subredditIdPrefix, comments, upvotes}) {

    return (
        <>

            <article className="hotpost">
                <h4><a href={`https://www.reddit.com${permalink}`}>{title}</a></h4>
                <span>
            <p><Link to={`/subreddit/r/${subreddit}`}>{subredditIdPrefix}</Link></p>
            <p>Comments {comments} - Upvotes {upvotes}</p></span>
            </article>
        </>
    )
}

export default HotPost
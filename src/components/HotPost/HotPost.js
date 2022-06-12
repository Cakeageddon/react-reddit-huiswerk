import React from "react";
import {Link} from "react-router-dom";
import Truncatenator from "../../helpers/Truncatenator";

function HotPost({permalink, title, subreddit, subredditIdPrefix, comments, upvotes}) {

    return (
        <>
            <article className="hotpost">
                <h3 className="article-title"><a href={`https://www.reddit.com${permalink}`}>{Truncatenator(title)}</a></h3>
                <span>
            <p className="hotpost-subreddit"><Link to={`/subreddit/r/${subreddit}`}>{subredditIdPrefix}</Link></p>
            <p>Comments {comments} - Upvotes {upvotes}</p></span>
            </article>
        </>
    )
}

export default HotPost
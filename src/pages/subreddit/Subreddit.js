import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


function Subreddit() {
    let {subredditId} = useParams();
    const history = useHistory();

    const [subreddit, setSubreddit] = useState([]);

    function handleClick() {
        history.push("/")
    }

    useEffect(() => {
        async function fetchSubreddit() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
                setSubreddit(result.data.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchSubreddit()
    }, [])

    return (
        <>
            <h1>{subreddit.display_name_prefixed}</h1>
            <h3>{subreddit.public_description}</h3>
            <p>We currently have {subreddit.subscribers} subscribers in our midst!</p>
            <button onClick={handleClick}>Take me home!</button>
        </>
    )
}

export default Subreddit
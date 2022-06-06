import React, {useEffect, useState} from "react";
import axios from 'axios';
import HotPost from "../../components/HotPost/HotPost";
import HeaderReddit from "../../components/HeaderReddit/HeaderReddit";


function Home() {

    const [hotPosts, setHotPosts] = useState([])

    useEffect(() => {
        async function fetchHotPosts() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
                console.log(result.data.data.children)
                setHotPosts(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }

        fetchHotPosts()
    }, [])

    return (
        <>
            <HeaderReddit/>
            <div className="background-container">
                <div className="outer-container-hotposts">
                    <div className="title-container">
                        <h2>Hottest posts</h2>
                        <p>on Reddit right now</p>
                    </div>
                    <div className="hotpost-container">
                        {hotPosts && hotPosts.map((post) => {
                            return (
                                <HotPost
                                    permalink={post.data.permalink}
                                    title={post.data.title}
                                    subredditIdPrefix={post.data.subreddit_name_prefixed}
                                    subreddit={post.data.subreddit}
                                    comments={post.data.num_comments}
                                    upvotes={post.data.ups}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
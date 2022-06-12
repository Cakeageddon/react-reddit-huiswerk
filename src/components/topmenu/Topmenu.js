import {NavLink} from "react-router-dom";

function Topmenu() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" exact
                                 className="active-link"
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subreddit/r/memes"
                                 className="active-link"
                        >Memes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subreddit/r/news"
                                 className="active-link"
                        >News
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Topmenu
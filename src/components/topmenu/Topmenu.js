import {NavLink} from "react-router-dom";

function Topmenu() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" exact
                                 activeClassName="active-link"
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subreddit/r/memes"
                                 activeClassName="active-link"
                        >Memes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subreddit/r/news"
                                 activeClassName="active-link"
                        >News
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Topmenu
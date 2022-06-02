import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

import './Header.css'

function Header() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact
                                 activeClassName="active-link"
                        >Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/subreddit" exact
                                 activeClassName="active-link"
                        >Subreddit
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
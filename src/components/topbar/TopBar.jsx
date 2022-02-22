import './topbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function TopBar() {
  
    // const { user } = useContext(Context);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5001/images/"
    
    const handleLogout = async () => {
        dispatch({ type: "LOGOUT" });
    };
    
    return (

        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link style={{ textDecoration: "none", color: "inherit" }} to="/">HOME</Link>
                    </li>
                    <li className="topListItem"><Link style={{ textDecoration: "none", color: "inherit" }} to="/about">ABOUT</Link></li>
                    <li className="topListItem"><Link style={{ textDecoration: "none", color: "inherit" }} to="/contact">CONTACT</Link></li>
                    <li className="topListItem"><Link style={{ textDecoration: "none", color: "inherit" }} to="/write">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>

            </div>
            <div className="topRight">

                {user ? 
               <Link to="/settings"><img className="topImg" src={PF+user.profilePic} alt="" /></Link>

                    : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link style={{ textDecoration: "none", color: "inherit" }} to="/register">Register</Link></li>
                            <li className="topListItem"><Link style={{ textDecoration: "none", color: "inherit" }} to="/login">Login</Link></li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}


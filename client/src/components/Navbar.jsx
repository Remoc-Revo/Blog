import React, { useContext,useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isNavExpanded,setIsNavExpanded]=useState(false);

  function toggleNav(){
    isNavExpanded=!isNavExpanded;
  }

  return (
    <div className={isNavExpanded?"navbar-expanded":"navbar"}>
      <div className="container" >
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>

        

        <div className="links" >
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
             <h6>Login</h6> 
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              <h6>Write</h6>
            </Link>
          </span>
        </div>

        
      </div>
      <button id="menu-button" onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          </svg>
        </button>
    </div>
  );
};

export default Navbar;

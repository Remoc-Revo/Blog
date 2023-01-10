import React, { useContext,useState} from "react";
import { Link,useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  var [isNavExpanded,setIsNavExpanded]=useState(false);
  const location=useLocation();
  const queryString=location.search;
  const urlParams=new URLSearchParams(queryString);
  const cat=urlParams.get('cat');

  function collapseNav(){
    setIsNavExpanded(false);
    console.log("nav collapsed ",isNavExpanded)
    
    return;
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
          <Link className={cat==='art'?"active link":"link"} to="/?cat=art" onClick={()=>{collapseNav()}}>
            <h6>ART</h6>
          </Link>
          <Link className={cat==='science'?"active link":"link"} to="/?cat=science" onClick={()=>{collapseNav()}}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className={cat==='technology'?"active link":"link"} to="/?cat=technology" onClick={()=>{collapseNav()}}>
            <h6>TECHNOLOGY</h6>         
          </Link>
          <Link className={cat==='cinema'?"active link":"link"} to="/?cat=cinema" onClick={()=>{collapseNav()}}>
            <h6>CINEMA</h6>
          </Link>
          <Link className={cat==='design'?"active link":"link"} to="/?cat=design" onClick={()=>{collapseNav()}}>
            <h6>DESIGN</h6>
          </Link>
          <Link className={cat==='food'?"active link":"link"} to="/?cat=food" onClick={()=>{collapseNav()}}>
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login" onClick={()=>{collapseNav()}}>
             <h6>Login</h6> 
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write" onClick={()=>{collapseNav()}}>
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

// import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from "../assets/websiteLogo.svg";
import React, { useState, useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from '../GlobalContext';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Navbar() {
  const context = useContext(GlobalContext)
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;
  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [user] = context.useAuth.user ? context.useAuth.user : false;
  const navigate = useNavigate()

  const adminRoute = () => {
    return (
        <ul className="navbar-nav">
              <NavLink to={`/adminpanel`} className="dropdown-item"><button>Admin Panel</button></NavLink>
              <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
          
   </ul>
    )
  }

  const userRoute = () => {
    return (
        <ul className="navbar-nav">
             <NavLink to={`/userdetails`} className="dropdown-item"><button>User Profile</button></NavLink>
             <NavLink to={`/`} onClick={logoutUser} className="dropdown-item"><button>Logout</button></NavLink>
                
            
        </ul>
    )
  }

  const commonRoute = () => {
    return (
        // <ul className="navbar-nav">
        <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
            <NavLink to={`/login`} className="nav-link" onClick={toggleMenu}><button>Login</button></NavLink>
            <NavLink to={`/register`} className="nav-link" onClick={toggleMenu}><button>Register</button></NavLink>
            
        </ul>
    )
  }

  const logoutUser = async () => {
    if(window.confirm(`Are you sure to logout?`)) {
      try {
        const res = await axios.get(`https://sattonjanam-be.onrender.com/api/v1/logout`)
        localStorage.clear()
        // toast.success(res.data.msg)
        console.log(res.data.msg)
        setIsAdmin(false)
        setUser(false)
        setIsLogged(false)
        setIsUser(false)
        navigate(`/`)
        window.location.reload()
      } catch (err) {
        window.location.reload()
            console.log(err.response.data.msg)
      }
    } else {
        console.log('logout terminated')
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      {/* <div className="contentContainer"> */}
        <div className="logoContent">
            <div className="logo-title">
              <img src={logo} alt="logo"/>
            </div>
            <div className="contact">
                <p className="phone"><i className="bi bi-telephone-fill"></i> 9773643677</p>
                {/* <p className="phone"><i className="bi bi-phone"></i> +91-9599991982</p> */}
                <p><i className="bi bi-envelope-fill"></i> www.sattonjanam.com</p>
                <p><i className="bi bi-envelope-fill"></i> Support@sattonjanam.com</p>
                {/* <NavLink to={`/register`}><button>Register</button></NavLink>
                <NavLink to={`/login`}><button>Login</button></NavLink> */}

                  {
                    isLogged ? (
                        <React.Fragment>
                                {
                                    isAdmin ? adminRoute() : null
                                }
                                {
                                    isUser ? userRoute() : null
                                }
                        </React.Fragment>
                    ) : commonRoute()
                }
            </div>
        </div>
        <div className='navbarContent'>
          <ul className={`links ${isMenuOpen ? "open" : ""}`} style={{zIndex: "3"}}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/service"} onClick={toggleMenu}>
                Services
              </NavLink>
            </li>
           
            <li>
              <NavLink to={"/successStories"} onClick={toggleMenu}>
                Success Stories
              </NavLink>
            </li>

            <li>
              <NavLink to={"/wedding"} onClick={toggleMenu}>
                Wedding Event Services
              </NavLink>
            </li>

            <li>
              <NavLink to={"/astrologer"} onClick={toggleMenu}>
                Astrologer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <MenuOutlined />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Navbar;


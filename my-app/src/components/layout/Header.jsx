import { NavLink } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Header(){
    return(
        <>
         <header id="home">
    <div className="header-top">
        <div className="header-top--left">
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"/doctors"}>Doctors</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/"}>FAQ</NavLink>
           
        </div>
        <div className="header-top--right">
          <NavLink className={"header-top-link"} to={"tel:+917482095532"}> <CallIcon/> <span>+91-7482095532</span></NavLink> 
           <NavLink className={"header-top-link"} to={"mailto:teambihar01@gmail.com"}><EmailIcon/><span>teambihar@gmail.com</span></NavLink>
            
        </div>
    </div>

    <nav> 
        <div className="logo">
            <a href="">
                <img src="img/logo.png" alt="" />
            </a>
        </div>
        <div className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/doctors">Doctors</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
          
           
           
        </div>
        <div className="nav-btn">
            <a className="medium-btn" href="#appointment-section">Book Appointment</a>
        </div>
    </nav>

   </header>
        </>
    )
}

export default Header;
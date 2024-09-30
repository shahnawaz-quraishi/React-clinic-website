import {NavLink} from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer(){
    return(
        <>
        <footer>
    <div className="container">
    <div className="footer-content">
        <div className="footer-content-item">
            <div className="footer-heading">
                <h2 className="sub-heading">
                    About Us
                </h2>
            </div>
            <div className="footer-text">
                <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
            </div>
            <div className="footer-icon">

               <NavLink to={"https://www.facebook.com/shahnawaz.quraish.9/"}> <FacebookIcon style={{color : "white", fontSize : "40"}}/> </NavLink>

               <NavLink to={"https://www.instagram.com/_shahnawaz_quraishi_01/"}> <InstagramIcon style={{color : "red", fontSize : "40"}}/> </NavLink>

                <YouTubeIcon style={{color : "red", fontSize : "40"}}/>
                <XIcon style={{color : "black", fontSize : "40"}}/>

               <NavLink to={"https://www.linkedin.com/in/md-shahnawaz-alam-81723624b/"}> <LinkedInIcon style={{color : "darkblue", fontSize : "40"}}/> </NavLink> 
  
            </div>
        </div>

        <div className="footer-content-item">
            <div className="footer-heading">
                <h2 className="sub-heading">
                    Quick Links
                </h2>
            </div>
            <div className="footer-link">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Our Cases</li>
                    <li>Other Links</li>
                </ul>
                <ul>
                    <li>Consuling</li>
                    <li>Finance</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>

        <div className="footer-content-item">
            <div className="footer-heading">
                <h2 className="sub-heading">
                    Open Hours
                </h2>
            </div>
            <div className="footer-text">
                <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
            </div>

            <div className="footer-time">
                <ul>
                    <li>Monday - Friday</li>
                    <li>Staurday</li>
                    <li>Sunday</li>
                </ul>
                <ul>
                    <li>8.00 - 20.00</li>
                    <li>9.00 - 18.30</li>
                    <li>9.00 - 15.00</li>
                </ul>
            </div>
        </div>

        <div className="footer-content-item">
            <div className="footer-heading">
                <h2 className="sub-heading">
                    Newsletter
                </h2>
            </div>
            <div className="footer-text">
                <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>

            <div className="footer-mail">
                <input type="email" placeholder="Your email address" />
                    <button type="submit">Send</button>
            </div>
        </div>

    </div>
</div>
   </footer>

   <section className="sub-footer">
    <div className="sub-footer-content">
        <p>© Copyright 2024 | All Rights Reserved by </p>
        <a href="">Shahnawaz Quraishi</a>
    </div>
   </section>
        </>
    )
}

export default Footer
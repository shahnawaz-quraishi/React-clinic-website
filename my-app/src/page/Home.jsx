import Blog from "../components/ui/Blog"
import ClinicDetail from "../components/ui/ClinicDetail"
import ClinicService from "../components/ui/ClinicService"
import ContactForm from "../components/ui/ContactForm"
import Feature from "../components/ui/Feature"
import MaintainRule from "../components/ui/MaintainRule"
import NewsLatter from "../components/ui/NewsLatter"
import Schedule from "../components/ui/Schedule"


function Home(){
    return(
        <>
        <main>
    <div className="container">
        <div className="text">
            <h1 className="main-heading">We Provide <span>Medical</span> Services <br/>That You Can <span>Trust!</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aut cupiditate <br/> atque alias excepturi, culpa magni repellendus facere iure enim!</p>
        </div>
        <div className="btn">
            <a className="medium-btn" href="">Get Appointment</a>
            <a className="small-btn" href="">About Us</a>
        </div>
    </div>
   </main>

     <Schedule />

    <section className="feature-section">
    <div className="container">
     <div className="feature-top">
        <h2 className="heading">We Are Always Ready To Help You & Your Family</h2>
        <img src="img/section-img.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts

        </p>
     </div>

       <Feature/>

     </div>
     </section>

     <ClinicDetail/>

     <MaintainRule/>

     <ClinicService/>

     <Blog/>

     <ContactForm/>

     <NewsLatter/>

     
    
        </>
    )
}

export default Home
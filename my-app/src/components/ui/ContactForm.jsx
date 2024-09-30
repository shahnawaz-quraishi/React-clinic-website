
function ContactForm(){
    return(
        <>
        <section className="appointment-section" id="appointment-section">
    <div className="container">
        <div className="appointment-heading">
            <h2 className="heading">We Are Always Ready To Help You. Book An Appointment</h2>
            <img src="img//section-img.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>
     <div className="appointment-content">
        <form action="">
            <div className="form-input">
            <div className="input-group">
                <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
                <input type="email" placeholder="email" />
            </div>

            <div className="input-group">
                <input type="number" placeholder="Phone" />
            </div>

            <div className="input-group">
                <select name="department">
                    <option value="d">Department</option>
                    <option value="o">Operation</option>
                    <option value="t">Treatment</option>
                    <option value="c">Checkup</option>
                    <option value="f">Fever</option>
                </select>
            </div>

            <div className="input-group">
                <select name="doctor">
                    <option value="d">Doctor</option>
                    <option value="o">Shahnawaz</option>
                    <option value="t">Sonu</option>
                    <option value="c">Chisti</option>
                    <option value="f">Lebid</option>
                </select>
            </div>

            <div className="input-group">
                <input type="date" placeholder="Date" />
            </div>

            
        </div>
        <div className="input-group">
            <textarea   cols="30" rows="10"></textarea>
        </div>
        <div className="form-btn">
            <a className="medium-btn" href="">Book An Appointment</a>
        </div>
        </form>
        <div className="appointment-image">
            <img src="img/contact-img.png" alt="" />
        </div>
    </div>
    </div>
   </section>
        </>
    )
}

export default ContactForm
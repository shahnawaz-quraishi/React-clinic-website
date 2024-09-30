import clinicServices from "../api/ClinicServiceData.json"
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
function ClinicService(){
    return(
        <>
          <section className="clinic-service" id="clinic-service">
    <div className="container">
    <div className="clinic-service-text">
        <h2 className="heading">We Offer Different Services To Improve Your Health</h2>
        <img src="img/section-img.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
    </div>

    <div className="clinic-service-content">
      {
         clinicServices.map((curElm) => {
            return(

           
        <div className="clinic-service-item" key={curElm.id}>
        <div className="service-icon">
            <MedicalServicesIcon style={{color : "blue", fontSize : 50}}/>
        </div>
        <div className="service-text">
            <h3 className="sub-heading">{curElm.title}</h3>
            <p>{curElm.heading}</p>
        </div>
    </div>
            )
            })
         }
    </div>
    </div>
    </section>
        </>
    )
}

export default ClinicService
import clinicDetailData from "../api/ClinicDetailData.json"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function ClinicDetail(){
    return(
        <>
    <section className="clinic-detail">
    <div className="clinic-bg">
    <div className="container">
        <div className="clinic-content">
        {
              clinicDetailData.map((curElm) => {
                return(
                     
            <div className="clinic-content-item" key={curElm.id}>
            <div className="content-icon">
             <CalendarMonthIcon className="clinic-detail-icon" style={{ fontSize : '40'}}/>
            </div>
            <div className="clinic-content-text">
                <h2 className="heading">{curElm.number}</h2>
                <p className="sub-heading ">{curElm.title}</p>
            </div>
        </div>
              )
            })
         }
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default ClinicDetail
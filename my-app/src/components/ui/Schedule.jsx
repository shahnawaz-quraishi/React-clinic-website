import scheduleData from "../api/ScheduleData.json"
import ScheduleTime from "./ScheduleTime"
function Schedule(){
    return(
        <>
        <div className="schedular">
        {
           scheduleData.map((curElm) =>{
            return (

        <div className="box" key={curElm.id}>
        <span>{curElm.subHeading}</span>
        <h3 className="sub-heading">{curElm.heading}</h3>
        <p>{curElm.para}</p>
        <a className="schedular-btn" href=""></a>
    </div>

       )
       })
    }
   <ScheduleTime/>
    </div>
        </>
    )
}

export default Schedule
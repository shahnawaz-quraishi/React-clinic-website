import featureData from "../api/FeatureData.json"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
function Feature(){
    return(
        <>
        <div className="feature-bottom">
       {
        featureData.map((curElm) => {
            return(

        
        <div className="feature-bottom--content" key={curElm.id}>
        <div className="icon">
           <LocalShippingIcon style={{color : "blue", fontSize : 70}}/>
           <div> {curElm.icon} </div>
        </div>
        <h3 className="sub-heading">{curElm.heading}</h3>
        <p>{curElm.para}</p>
     </div>

    )
    })
     }
     </div>
        </>
    )
}

export default Feature
import maintainRuleCard from "../api/MaintainRuleCard.json"
function MaintainRule(){
    return(
        <>
         <section className="maintain-rule" id="maintain-rule">
    <div className="container">
        <div className="maintain-rule-text">
        <h2 className="heading">We Maintain Cleanliness Rules Inside Our Hospital</h2>
        <img src="img/section-img.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
    </div>

       
    </div>

    <div className="maintain-rule-card">
         {
            maintainRuleCard.map((curElm) =>{
                return(
 
        <div className="card-image" key={curElm.id}>
            <img src={curElm.image} alt="" />
        </div>
             )
            })
         }
        </div>
        </section>
        </>
    )
}

export default MaintainRule
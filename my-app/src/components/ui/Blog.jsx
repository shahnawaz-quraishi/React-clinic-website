import blog from "../api/BlogData.json"
function Blog(){
    return(
        <>
         <section className="news-section" id="news-section">
    <div className="container">
        <div className="news-heading">
            <h2 className="heading">Keep Up With Our Most Recent Medical News.</h2>
            <img src="img/section-img.png" alt=" " />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>

        <div className="news-content">
              {
                blog.map((curElm) =>{
                    return(
    
            <div className="news-item" key={curElm.id}>
            <div className="news-image">
                <img src={curElm.image} alt="" />
            </div>
            <div className="news-text">
                <span>{curElm.date}</span>
                <h3 className="sub-heading">{curElm.heading}</h3>
                <p>{curElm.para}</p>
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

export default Blog
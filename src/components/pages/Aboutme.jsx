
export default function AboutPage() {

    return(
        <section className="about-me bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src={'/src/components/Images/portrait.jpg'} alt="Profile" className="img-fluid rounded-circle shadow-sm" style={{ width: "250px", height: "250px" }} />
            </div>
            <div className="col-md-8">
              <h1 className="mb-3">A little about me</h1>
              <p>
              Hi! I'm Blake
              
              I'm a software developer speciallizing in responsive full-stack development for web applicatoins.
              </p>
              <p>
              My journey started in Salt Lake City, where I originally studied and recieved B.S. degrees in Chemistry and Biology before my attention turned to development. 
              I hope to continue learning and using new technologies throughout everything I develop.
              </p>
              <p>
              When I'm not developing, I'm found typically doing one of several activities; reading, running, skiing, or taking photos. 
              Ever since moving out to Salt Lake City, these three hobbies have kept me active and motivated to build meaningful projects
              that help me learn and meet the needs of others.
              </p>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
            <div className="col-6 text-center">
                <img src={'/src/components/Images/CreekPhoto.jpeg'} alt='creek photo' className="img-fluid rounded shadow-sm" style={{ width: "100%", maxWidth: "600px" }} />
            </div>
            <div className="col-6 text-center">
                <img src={'/src/components/Images/RocknRollHalf.jpg'} alt='' className="img-fluid rounded shadow-sm" style={{ width: "100%", maxWidth: "500px", maxHeight: "300", objectFit: "cover" }} />
            </div>
        </div>

      </section>


    );

}
import Navbar2 from "../../components/Navbar2"
import background from "../../images/back.png";
import Footer from "../../components/Footer"


export default function Dashboard() {
    return (
        <>
        <Navbar2/>
        <div className="hero">
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="col-lg-5">
                          <div className="intro-excerpt">
                              <h1>EMS <span className="d-block"></span></h1>
                              <p className="mb-4">Great things in business are never done by one person; they're done by a team of people.</p>

                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="hero-img-wrap">
                              <img src={background} className="img-fluid" alt="Couch" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <Footer/>
        </>
    )
}
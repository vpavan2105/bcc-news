// import React from "react";
import "../Pages/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Aboutus() {
  return (
    <>
      <Navbar />
      <div
        className="section-header"
        style={{ animation: "slideInLeft 1s ease-in-out" }}
      >
        <div className="container">
          <h1>Our Story</h1>
          <p>
            Welcome to BBC News, where information meets innovation! Our story
            begins with a dedication to bringing you the most comprehensive news
            coverage. We are committed to journalistic excellence and ensuring
            that every story we cover allows you, our readers, to stay informed
            and engaged with the world around you. Your trust is our motivation,
            and together, we create a narrative thats not only newsworthy but
            also truthful and insightful. Welcome to BBC News – Your Trusted
            Source for Breaking News and In-depth Analysis!
          </p>
        </div>
      </div>
      <div
        className="about-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          backgroundColor: "black",
          padding: "20px",
          gap: "20px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <div className="about-image">
          <img
            src="./src/assets/team.jpg"
            alt="reporting"
            height="350"
            style={{ transition: "transform 0.3s ease-in-out" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div className="about-content" style={{ marginLeft: "20px" }}>
          <h1>About Us</h1>
          <br />
          <p>
            At BBC News, we are a team united by the passion for journalism and
            the pursuit of truth. Our collective goal is to deliver stories that
            matter, to a global audience. With a team of reporters, editors, and
            correspondents from around the world, we work tirelessly to ensure
            that every angle is covered. Our dedication to factual reporting and
            thought-provoking analysis is what makes BBC News a leader in the
            news industry. Join us on our journey to inform and inspire, every
            day.
          </p>
        </div>
      </div>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <div className="underline"></div>
            <p>
              Excited to have you on board! Get ready for a journey of
              innovation, collaboration, and continuous learning. We believe in
              pushing boundaries, embracing new tech, and creating a positive,
              fun work environment. Lets build awesome things together and make
              a lasting impact.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img
                    src="/src/assets/pawan.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Pawan Kumar</h4>
                  <span>Full-stack developer</span>

                  <p>
                    Greetings, fellow Earthlings! Im not your average developer;
                    Im the maestro of coding, adding a touch of elegance and
                    precision to each line. Just as Jethalal runs Gada
                    Electronics with flair.
                  </p>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/pavankumar25/">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://github.com/vpavan2105">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter "></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img
                    src="/src/assets/pournima.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Poornima mohabe</h4>
                  <span>Full-stack developer</span>
                  <p>
                    Well met, tech aficionados! I transcend the realms of a
                    regular developer; Im the coding maestro, infusing grace and
                    accuracy into every code stroke. Much like Jethalals antics
                    at Gada Electronics.
                  </p>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/poornima-mohabe/">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://github.com/PoornimaMohabe">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img
                    src="./src/assets/saurabh.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Saurabh ganguly</h4>
                  <span>Full-stack developer</span>
                  <p>
                    Ahoy there! I am more than a developer; I am the coding
                    virtuoso, infusing grace and accuracy into every code
                    snippet. Much like Jethalal orchestrates Gada Electronics.
                  </p>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/saurabh-ganguly-98612b2b6">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://github.com/Saurabh8657">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/sauravganguly_9/">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img
                    src="./src/assets/sachin.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sachin Kumanache</h4>
                  <span>Full-stack developer</span>
                  <p>
                    Howdy, code wranglers! I am not your run-of-the-mill
                    developer; I am the coding maestro, adding finesse and
                    precision to every line of code. Just as Jethalal manages
                    Gada Electronics with flair, I tackle the coding landscape
                    with passion.
                  </p>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/sachin-kumanache/">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://github.com/sachinkumanache">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img src="./src/assets/sachinMohite.png" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Sachin Mohite</h4>
                  <span>Full-stack developer</span>
                  <p>
                    Salutations, coding enthusiasts! I am not just a developer;
                    I am the coding virtuoso, weaving elegance and precision
                    into the fabric of each code line. Similar to how Jethalal
                    runs Gada Electronics with fervor.
                  </p>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/sachin-mohite-0893a7203/">
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="https://github.com/sachin708">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Aboutus;

import { useEffect } from "react";
import Img from "../../images/personal.jpg";
import './about.scss';
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
export default function About() {
  const fill = () => {
    let allSkills = document.querySelectorAll(".line .progress .progress-icon");
    allSkills.forEach(el => {
      el.style.width = el.dataset.progress
    })
  }
  useEffect(() => fill(), [])
  const navigate = useNavigate()
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="header-about">
            <div className="stars">
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
            <h2 className="section-title">
              About Me
            </h2>
          </div>
          <div className="content">
            <div className="img">
              <img src={Img} alt="photo" />
            </div>
            <div className="text">
              <span className="title">Frontend developer</span>
              <h1 className="name">Hello ,My name is
                <span> Alaa adel</span>
              </h1>
              <p className="description">
                I’m a junior front end developer , building and maintaining Multi Page Application using
                HTML, CSS, JS, TS etc.…. And building SPA
                (a single page application)
              </p>
              <div className="info-for-me">
                <h4>Info for me :</h4>
                <div>
                  <p> <span>Name :</span>  Alaa Adel Abdel-Gayed Abdel-Ghani </p>
                  <p> <span>Age :</span>  20 years</p>
                  <p> <span>Job :</span>   Frontend developer</p>
                  <p> <span>Military service :</span>  still student</p>
                </div>
              </div>
              <div className="links">
                <button onClick={() => navigate("/contact")}>Hire Me</button>
                <a href="ALAA_ADEL_CV.pdf" download={"Alaa_Adel_CV.pdf"}>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container">
          <div className="contain-lines">
            <div className="line">
              <div className="text">
                <h4>HTML</h4>
                <p>95%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="95%"></span>
              </div>
            </div>
            <div className="line">
              <div className="text">
                <h4>CSS</h4>
                <p>90%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="90%"></span>
              </div>
            </div>
            <div className="line">
              <div className="text">
                <h4>JS</h4>
                <p>70%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="70%"></span>
              </div>
            </div>
            <div className="line">
              <div className="text">
                <h4>SASS</h4>
                <p>90%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="90%"></span>
              </div>
            </div>
            <div className="line">
              <div className="text">
                <h4>REACT.JS</h4>
                <p>85%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="85%"></span>
              </div>
            </div>
            <div className="line">
              <div className="text">
                <h4>GIT & GITHUB</h4>
                <p>80%</p>
              </div>
              <div className="progress">
                <span className="progress-icon" data-progress="80%"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
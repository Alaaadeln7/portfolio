import { Link } from "react-router-dom";
import './home.scss';
import ReactWhatsapp from "react-whatsapp";
import Img from "../../images/personal.jpg"
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <div className="img">
            <img src={Img} alt="person photo" />
          </div>
          <div className="text">
            <h1 className="name">Alaa adel</h1>
            <p className="job">Frontend developer</p>
            <div className="social-media">
              <h4>Let's be friends:</h4>
              <ul>
                <li><Link target="_blank" to={"https://www.facebook.com/Alaaadeln7"}><FaFacebookF /></Link></li>
                <li><Link target="_blank" to={"https://www.linkedin.com/in/alaaadeln7"}><FaLinkedinIn /></Link></li>
                <li><Link target="_blank" to={"https://www.github.com/alaaadeln7"}><FaGithub /></Link></li>
                <li><Link target="_blank" to={"https://www.instagram.com/Alaaadeln7"}><FaInstagram /></Link></li>
                <li><ReactWhatsapp number="+201023203669" message="Hi,I'm from your portfolio"><FaWhatsapp /></ReactWhatsapp></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
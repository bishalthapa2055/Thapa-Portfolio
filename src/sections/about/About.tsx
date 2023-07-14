import "./About.css"
import CV from "../../assets/check.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import data from "./data";
import Card from "../../Components/Card";
import { useState } from "react";
import Form from "./Form";

const About = () => {
  const [modalState, setModalState] = useState(false)
  const [showForm, setShowForm] = useState(false)
  return (
    <section id='about'>
      <div className="container about__container">


        <div className="about__left">
          <div className="about__Portrait">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects my clients love have always beeen my passion.Being in the web development industry for over 3 years and serving than 70 happy clients worldwide , I am always motivated to do more!
          </p>
          <p>Hi, my name is Bishal Thapa from Lalitpur,Nepal . I am full-stack-web develper with a bacholers degree in Computer Engineering. My top prorities is to get your business online the right way,givinh you industry-standard design and all the functionality need to operate smoothly online.Get in touch today with the details of your project let's get started! Check out my resume below!</p>
          <a
            className="btn primary" onClick={() => setShowForm(!modalState)}>Download CV
            <DownloadIcon />

          </a>
        </div>
      </div>
      {
        showForm && (
          <Form setModal={setShowForm} />
        )
      }
    </section>
  )
}

export default About

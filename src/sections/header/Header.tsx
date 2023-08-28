import "./Header.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typical from 'react-typical';
import GitHubIcon from '@mui/icons-material/GitHub';
const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="main__header">
      <div className="container main__header__container">

        <div className="main__left__container"  >
          <h2>Hy! I am</h2>
          <h1>Er. Bishal Thapa</h1>
          <p>Designation : {''}
            <p style={{ color: "teal" }}>

              <Typical
                steps={['NODE DEVELOPER', 5000, 'REACT DEVELOPER', 5000, 'MERN STACK DEVELOPER', 5000]}
                loop={Infinity}
                wrapper="b"
              />

              {/* MERN STACK DEVELOPER */}
            </p>
          </p>
          <button className="btn primary" onClick={scrollToContact }>Hire Me</button>
          <div className="socials__container" >

            <a href="tel:+9779840527839" target="_blank" rel="noopener noreferrer">
              
              <WhatsAppIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>
            <a href="https://github.com/bishalthapa2055" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>
            <a href="https://linkedin.com/in/bishalthapa2055" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>

          </div>
        </div>
        <div className="main__right__container" >
          <div className="image__container">
            <img src="https://angelkorean.s3.ap-southeast-1.amazonaws.com/profile/1693209690223.jpeg" alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
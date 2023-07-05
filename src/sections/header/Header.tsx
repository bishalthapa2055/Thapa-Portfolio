import "./Header.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typical from 'react-typical';
import GitHubIcon from '@mui/icons-material/GitHub';
const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header__container">

        <div className="main__left__container"  >
          <h2>Hy! I am</h2>
          <h1>Er. Bishal Thapa</h1>
          <p>Designation : {''}
            <p style={{ color: "teal" }}>

              {/* <Typical
                steps={['NODE DEVELOPER', 5000, 'REACT DEVELOPER', 5000, 'MERN STACK DEVELOPER', 5000]}
                loop={Infinity}
                wrapper="b"
              /> */}

              MERN STACK DEVELOPER
            </p>
          </p>
          <button className="btn primary">Hire Me</button>
          <div className="socials__container" >

            <a href="tel:1234567890">
              
              <WhatsAppIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>
            <a href="mailto:example@example.com">
              <GitHubIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>
            <a href="mailto:example@example.com">
              <LinkedInIcon style={{ fontSize: '2.5rem', fontWeight: 400 }} />
            </a>

          </div>
        </div>
        <div className="main__right__container" >
          <div className="image__container">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
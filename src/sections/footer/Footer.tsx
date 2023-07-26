import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

  return (
    <footer>
      <section id='footer'>
        <div className="container footer__container">


          <div className="icon__container">
            <a href="https://github.com/bishalthapa2055" target="_blank" rel="noopener noreferrer" className="icon__container__details" >
              <GitHubIcon />
            </a>

            <a href="https://linkedin.com/in/bishalthapa2055" target="_blank" rel="noopener noreferrer" className="icon__container__details">

              <LinkedInIcon />
            </a>

            <a href="mailto:bishalthapab989@gmail.com" className="icon__container__details">

              <MailOutlineIcon />
            </a>
            <a href="tel:+9779840527839" target="_blank" rel="noopener noreferrer" className="icon__container__details">
              <WhatsAppIcon />

            </a>
            <a href="https://instagram.com/bishalthapab989?igshid=ZDc4ODBmNjlmNQ==" className="icon__container__details" target="_blank" rel="noopener noreferrer">

              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009473409674&mibextid=ZbWKwL" className="icon__container__details" target="_blank" rel="noopener noreferrer">

              <FacebookIcon />
            </a>
          </div>
          <div className="footer__copyright">
            <h4>2023 Bishal Thapa</h4>{""}
            <CopyrightIcon sx={{ color: "white" }} />{""}
            <h4>All Rights Reserved</h4>
          </div>


        </div>
      </section>
    </footer>
  )
}

export default Footer
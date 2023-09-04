import "./Navbar.css"
import { data } from "./data"
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Navbar = () => {

  return (
    <nav>
      <div className="container navbar__container">


        <a href="/" className="nav__logo">
          <img src="https://angelkorean.s3.ap-southeast-1.amazonaws.com/profile/1693209690223.jpeg" alt="logo" />
        </a>


        <ul className="nav__menu">

          {
            data.map(({ id, link, title }) => {
              return (
                <>
                  <li key={id}>
                    <a href={link} >
                      <h5>
                        {title}
                      </h5>
                    </a>
                  </li>
                </>
              )
            })
          }
        </ul>

        {/* <button id="theme__icon">
          <ColorLensIcon />
        </button> */}

      </div>

    </nav>
  )
}

export default Navbar
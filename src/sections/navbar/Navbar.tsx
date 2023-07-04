import "./Navbar.css"
import { data } from "./data"
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Navbar = () => {

  return (
    <nav>
      <div className="container nav__container">
        {/* <div className="logo__container"> */}

          <a href="/" className="nav__logo">
            <img src="https://images.unsplash.com/photo-1625595234473-c00c86c73353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="logo" />
          </a>
        {/* </div> */}
        {/* <div className="list__container"> */}

          <ul className="nav__menu">

            {
              data.map(({ id, link, title }) => {
                return (
                  <>
                    <li key={id}>
                     <a href={link} >
                      {title}
                     </a>
                    </li>
                  </>
                )
              })
            }
          </ul>

            <button id="theme__icon">
              <ColorLensIcon />
            </button>
        {/* </div> */}
      </div>

    </nav>
  )
}

export default Navbar
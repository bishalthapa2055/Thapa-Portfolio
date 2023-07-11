import { IconButton, Tooltip } from "@mui/material"
import "./FloatingNav.css"
import { data } from "./data"
const FloatingNav = () => {
  return (


    <section id="floating__nav" className="mobile__section">

      <div className="container floating__container">
        <ul className="floating__menu">
          {
            data.map(({ id, link, title, icon }) => {
              return (
                <>
                  <li key={id}>
                    <a href={link} className="icon__container">
                      {icon}
                    </a>
                  </li>
                </>
              )
            })
          }
        </ul>
      </div>



    </section>
  )
}

export default FloatingNav
import Card from "../../Components/Card"
import "./Portfolio.css"
import data from "./data"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects I recently worked in for my clients..</p>
      <div className="container portfolio__container">
        {
          data.map(item => (
            <Card key={item.id} className="portfolio white">
              <div className="portfolio__image__container">
                <img src={item.image} alt="images"  />
              </div>
              <div className="portfolio__details">
                <h2>{item.title}</h2>
                <h4> Role : {item.role}</h4>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank" className="btn primary">Demo
                </a>
                </div>
            </Card>
          ))
        }


      </div>
    </section>
  )
}

export default Portfolio
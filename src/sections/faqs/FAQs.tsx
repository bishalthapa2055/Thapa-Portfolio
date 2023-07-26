import { useState } from "react";
import Card from "../../Components/Card"
import "./FAQs.css"
import data from "./data"
import FAQ from "./FAQ";


const FAQs = () => {

  return (
    <>

      <section id="faqs">

        <h2>Frequently Asked Questions</h2>
        <p className="detailss">Here are some questions I usually get.Click to toggle the answer, and if you still have more questions, shoot mea a message from the contact section!</p>
        <div className="container faqs__container">
          <div className="faqs__wrapper">
          {data.map(({ id , question, answer }) => {
              return <FAQ key={id} question={question} answer={answer} />;
            })}
          </div>
        </div>

      </section>
    </>
  )
}

export default FAQs

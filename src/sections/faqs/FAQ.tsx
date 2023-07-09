import { IsoSharp } from "@mui/icons-material";
import { useState , ReactNode } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";



type FAQprops={
    question : string;
    answer: string;
}
const FAQ : React.FC<FAQprops> = ({ question, answer }) => {
  const [showAnswer, isShowAnswer] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon" onClick={() => isShowAnswer(!showAnswer)}>
          {
            showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {showAnswer ? <p>{answer}</p> : ""}
    </article>
  );
};

export default FAQ

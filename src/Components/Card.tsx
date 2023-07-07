// import "./card.css"

// const Card = ({children , className }) => {
//   return (
//     <>
//     <article className={`card ${className}`} 
//     // onClick={onClick}
//     >
//         {children}

//     </article>
//     </>
//   )
// }

// export default Card

import React , {ReactNode} from "react"
import "./card.css"

type Cardprops ={
  children : ReactNode;
  className ?:string;
  onClick ?:() => void
}

const Card : React.FC<Cardprops> = ({children , className , onClick}) =>{
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
}

export default Card ;
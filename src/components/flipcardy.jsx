import { useState } from 'react';

const Flashcard = (props) => {
        const lip = () => {
                props.setFlipit(!props.flipIt)               
  }
    return (
        <>
        <div style={{backgroundColor:props.color}} className="button-flipcardy"onClick={lip}>
          
            {props.flipIt ? (<h4>{props.backCard}</h4>):(<h4>{props.frontCard}</h4>)}
            
           </div>
        </>
    )
}
export default Flashcard


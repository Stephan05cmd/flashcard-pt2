import { useState } from "react"

const DerivForm = (props) => {
    const [correctDeriv, setcorrectDeriv] = useState("")
    const [userInput, setuserInput] = useState("")
    const handleChange = (e) => {setuserInput(e.target.value);}

    const checker = (e) => {
        e.preventDefault();
        if(userInput == props.backCard){
            setcorrectDeriv("correct")
     } else {
        setcorrectDeriv("wrong")
         }
    }

       return (
            <> 
           
           <form id={correctDeriv} className="Form-container" onSubmit={checker}>
             <input value={userInput} onChange={handleChange} type="text" placeholder='Sumbit your answer'></input>
             <button type="submit">Sumbit</button>
            </form>
           
            </>
       )
}

export default DerivForm
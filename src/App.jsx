import { useState } from 'react';
import './App.css'
import Flashcard from "./components/flipcardy"
import cardArray from "./database/dataarray"
import DerivForm from "./components/DerivForm"
const App = () => {
const [count, setCount] = useState(0)
const [flipIt, setFlipit] = useState(false)


const cycleBack = () => {
  if(count > 0) {
    setCount(count-1) 
    setFlipit(false)
  }
}

const cycleForward = () => {
  if(count < 9 ) {
    setCount(count+1) 
    setFlipit(false)
  }
}

  return (
    <>
      <div className="App">
        <div ClassName="header">
          <h1>Derivatives Flashcards</h1>
          <h4>This will test your derivative knowledge. Good Luck!</h4>
          <h3>  Number of cards is: 10</h3>
        </div>

     <div className="flashcard-container">
       <Flashcard 
        id={cardArray[count].id}
        frontCard={cardArray[count].frontCard}
        backCard={cardArray[count].backCard}
        flipIt={flipIt}
        setFlipit={setFlipit}
        color={cardArray[count].color}
    />
    </div>

      <div className="button-info">
        <button onClick={cycleBack}>Back</button>
        <button onClick={cycleForward}>Forward</button>
      </div>
      <DerivForm backCard={cardArray[count].backCard} />
    </div>
    </>
    
  )
}

export default App

import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


  const addValue = () => { 
    setCounter(counter + 1)
    console.log("Clicked",Math.random(),counter)
  }

  const removeValue = () => { 
    setCounter(counter - 1)
    console.log("Clicked",Math.random(),counter)
  }

  if (counter < 0) {
    setCounter(0)
    alert("Value is less than 0");
  }
  else if (counter > 20) { 
    setCounter(20)
    alert("Value is greater than 20");
  }


  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <button onClick={addValue}>Added {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App

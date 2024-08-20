import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function getRandomNumberBetween(min, max) {
    //console.log(Math.floor(Math.random() * (max - min + 1) + min))
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const noMoreThanHundred = () => {
    console.log(counter)
    setCounter((counter) => counter + 1)
    if(counter + 1 > 100) { //counter + 1 because remember that counter state is 0 at the beggining, and if we do counter > 100 it will compare 0 greater than 100 and it would let you go up to 101, and we don't want that, so, remember that this is the logic for incrementing validation until 100. count + 1 is like saying 100 + 1 > 100 so, that would be true and that's it. 
      setCounter(100)
    }
  }
  const noLessThanZero = () => {
    console.log(counter)
    setCounter((counter) => counter - 1)
    if(counter - 1 < 0) {
      setCounter(0)
    }
  }

  return (
    <>
      <div>
        <h1>Number Counter</h1>
        <p>Counter: { counter } </p>
      </div>
      <div>
        {//<button onClick={() => setCounter((count) => count + 1)}>Increment</button>/
        }
        <button onClick={noMoreThanHundred}>Increment</button>
        {//<button onClick={() => setCounter((count) => count - 1)}>Decrement</button>
        }
        <button onClick={noLessThanZero}>Decrement</button>
        <button onClick={() => setCounter(getRandomNumberBetween(1, 10))}>Random</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  )
}

export default App

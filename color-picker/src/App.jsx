import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#fff")
  const [colorInput, setcolorInput] = useState("#000000")
  const [hexIsValid, setHexIsValid] = useState('none')

  const hexValidation = (colorInput) => {
    /*if(colorInput[0] === "#" && colorInput.length === 7) {
      setHexIsValid('none')
    } else {
      setHexIsValid('')
    }*/

    //Verify a Hex Value with regex
    const hexRegex = /^#[0-9A-F]{6}$/i;
    return hexRegex.test(colorInput);
  }

  return (
    <>
      <h1>Pick a color!</h1>
      <input 
        type='color' 
        value={color}
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
      <h2>HEX value</h2>
      <input 
        type='text'
        placeholder='#ffffff'
        onChange={(event) => {
          setcolorInput(event.target.value)
        }}
      />
      <button className='button' onClick={() => {
        if(hexValidation(colorInput)) {
          setColor(colorInput);
          setHexIsValid(true);
        } else {
          setHexIsValid(false);
        }
        
        {
          /*hexValidation(colorInput)
          setColor(colorInput)*/
        }
      }}>Color it</button>
      <div className='errorMessage' style={{ display: hexIsValid ? 'none' : 'block' }}>
        <p>Incorrect value, please enter a HEX value</p>
      </div>
      <div className='box' style={{ background: color}}></div>
    </>
  )
}

export default App

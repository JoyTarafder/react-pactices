// Desc: This file contains the main component of the application
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // useState is used to create a state variable and a function to update it
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  // useRef is used to create a reference to an element
  const passwordRef = useRef(null)

  // useCallback is used to prevent the function from being re-created every time the component is re-rendered

  const generatePassword = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''

    if (numberAllowed) chars += '0123456789'
    if (charAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><"

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length + 1)
      pass += chars.charAt(randomIndex)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed,setPassword])

  const copyPasswordClipBoard = useCallback(() => { 
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
    // alert user
    alert('Password has been copied to clipboard!');
  }, [password])


  // useEffect is used to run the function when the component is mounted and when the dependencies change
  
  useEffect(() => { 
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  // The return statement is used to return the JSX
  return (
    // The className attribute is used to add classes to the elements
    // The tailwindcss classes are used to style the elements
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-9 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <br />
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          placeholder='Your password'
          readOnly
          ref={passwordRef}
          className='outline-none w-full py-1 px-3'
        />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-indigo-500 hover:text-slate-950'
          onClick={copyPasswordClipBoard}

          > copy
        </button>
      </div>
      
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: { length }</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev); }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => { setCharAllowed((prev) => !prev); }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App

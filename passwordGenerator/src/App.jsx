import { useState, useCallback, useEffect } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

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

// useEffect is used to run the function when the component is mounted and when the dependencies change
  useEffect(() => { 
    generatePassword()
  },[length, numberAllowed, charAllowed, generatePassword])
  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <br />
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          placeholder='Your password'
          readOnly
          className='outline-none w-full py-1 px-3'
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
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
    </div>
  )
}

export default App

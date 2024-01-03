import { useState, useCallback } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const generatePassword = useCallback(() => {
    const numbers = '0123456789'
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let charsAllowed = ''
    let password = ''

    if (numberAllowed) {
      charsAllowed += numbers
    }
    if (charAllowed) {
      charsAllowed += chars
    }

    for (let i = 1; i <= passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charsAllowed.passwordLength + 1)
      password += charsAllowed[randomIndex]
    }

    setPassword(password)
  },[passwordLength, numberAllowed, charAllowed,setPassword])

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
            <input type="range" min={6} max={100} value={passwordLength}
              className='cursor-pointer'
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <label>Length { passwordLength }</label>
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

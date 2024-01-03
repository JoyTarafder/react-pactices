import { useState } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  return (
    <div>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div>
        
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)

  return (
    <div>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>

    </div>
  )
}

export default App

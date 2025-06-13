import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-200 text-center text-red-800'>Hello Peter</h1>
    </>
  )
}

export default App

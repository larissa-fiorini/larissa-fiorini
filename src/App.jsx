import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <p className="text-red-400 font-bold mt-10">Tailwind is working.</p>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      </div>
     
    </>
  )
}

export default App

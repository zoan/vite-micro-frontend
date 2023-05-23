import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import useCount from './store'

import Button from './Button'

import './App.css'

function App() {
  const [count, setCount] = useCount()

  return (
    <>
      <div>
        <h1>Remote Application</h1>
        <Button />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Temperature from './components/temperature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Temperature/>
    </div>
  )
}

export default App

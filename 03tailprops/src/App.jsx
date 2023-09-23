import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count,setCont] = useState(0)
  let myObj = {
    username: "Pratik",
    age:21
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Pratik" btnText = "Click Me"/>
      <Card username = "Hitman" />
    </>
  )
}

export default App

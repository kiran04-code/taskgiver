import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/login'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Login/>
   </div>
  )
}

export default App

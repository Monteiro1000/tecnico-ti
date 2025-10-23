import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './Componentes/FirstComponet'
import './Componentes/FirstComponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
      <FirstComponent></FirstComponent>
    </div>
  )
}

export default App

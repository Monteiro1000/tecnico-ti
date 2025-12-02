import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './Componentes/FirstComponet'
import './Componentes/FirstComponet'
import SecondComponent from './Componentes/secondcomponent'
import TerceiroComponent from './Componentes/TerceiroComponent'
import TemplateExpression from './Componentes/TemplateExpression'
import MyForm from './Componentes/MyForm'
import Events from './Componentes/event'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Events/>
    </div>
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './Componentes/FirstComponet'
import './Componentes/FirstComponet'
import SecondComponent from './Componentes/secondcomponent'
import TerceiroComponent from './Componentes/TerceiroComponent'
import TemplateExpression from './Componentes/TemplateExpression'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <TemplateExpression></TemplateExpression>
    </div>
    
  )
}

export default App

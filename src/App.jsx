import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {<Header/>}
    {<Todo/>}      
    </div>
  )
}

export default App

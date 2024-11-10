import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Banner from './components/Banner/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Aprendendo React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Olá, Mundo!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

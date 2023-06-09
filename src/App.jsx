import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Identity from './pages/Identity'

function App() {
  const [count, setCount] = useState(0)
  const [activePage, setActivePage] = useState('home')

  function switchTo(page){
    setActivePage(page)
  }

  const ActivePage = () => {
    switch (activePage){
      case 'home':
        return <Home switchTo={switchTo} />
        break;
      case 'identity':
        return <Identity switchTo={switchTo} />
        break;
      default :
        return <Home />
    }
  }

  return (
    <>

      <ActivePage />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

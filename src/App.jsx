import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Identities from './pages/Identities'
import Values from './pages/Values';

function App() {
  const [count, setCount] = useState(0)
  const [activePage, setActivePage] = useState('home')
  const [activeIdentity, setActiveIdentity] = useState('')
  const [identities, setIdentities] = useState([]);

  useEffect(() => {
    let data = [
      { slug: 'husband', 
        title: 'Husband',
        values: [
          {
            slug: 'loving',
            title: 'Loving',
            habits: [
              { 
                slug: 'turn-toward-bids',
                title: 'Turn toward bids'
              }
            ]
          },
          {
            slug: 'encouraging',
            title: 'Encouraging',
            habits: [
              { 
                slug: 'a-compliment-a-day',
                title: 'A compliment a day'
              }
            ]
          }
        ]
      },
      { slug: 'developer', title: 'Developer' },
    ]
    setIdentities(data)
  }, [])

  function switchTo(page){
    setActivePage(page)
  }

  const ActivePage = () => {
    switch (activePage){
      case 'home':
        return <Home switchTo={switchTo} />
        break;
      case 'identities':
        if (activeIdentity) {
          return <Values activeIdentity={activeIdentity} identities={identities} switchTo={switchTo} />
        } else {
          return <Identities setActiveIdentity={setActiveIdentity} identities={identities} switchTo={switchTo} />
        }
        break;
      default :
        return <Home />
    }
  }

  return (
    <>
      <ActivePage />
    </>
  )
}

export default App

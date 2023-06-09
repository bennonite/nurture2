import { useState, useEffect } from 'react'
import './App.css'
import { Outlet, Link } from "react-router-dom";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    let staticData = [
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
    setData(staticData)
  }, [])

 

  return (
    <>
      <Outlet context={[{data}]} />
    </>
  )
}

export default App

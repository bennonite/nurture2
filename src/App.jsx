import { useState, useEffect } from 'react'
import './App.css'
import { Outlet, Link } from "react-router-dom";
import slugify from 'react-slugify';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = window.localStorage.getItem('NURTURE_APP_STATE');
    if ( storedData !== null ) setData(JSON.parse(storedData));
  }, []);

  useEffect(() => {
    if (data !== null){
      window.localStorage.setItem('NURTURE_APP_STATE', JSON.stringify(data));
    }
  }, [data])

  // useEffect(() => {
  //   let staticData = [
  //     { slug: 'husband', 
  //       title: 'Husband',
  //       values: [
  //         {
  //           slug: 'loving',
  //           title: 'Loving',
  //           habits: [
  //             { 
  //               slug: 'turn-toward-bids',
  //               title: 'Turn toward bids'
  //             }
  //           ]
  //         },
  //         {
  //           slug: 'encouraging',
  //           title: 'Encouraging',
  //           habits: [
  //             { 
  //               slug: 'a-compliment-a-day',
  //               title: 'A compliment a day'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     { slug: 'developer', title: 'Developer' },
  //   ]
  //   setData(staticData)
  // }, [])


  function addIdentity(identity){
    let newData = data === null ? [] : [...data];
    let newIdentity = { title : identity, slug : slugify(identity), values : [] }
    newData.push(newIdentity)
    setData(newData);
  }

  function addValue(identitySlug, value){
    let newData = [...data];
    let newValue = { title : value, slug : slugify(value), habits : [] }
    newData.forEach( identity => {
      if ( identity.slug === identitySlug){
        identity.values.push(newValue);
      }
    })
    setData(newData);
  }

  function deleteItem(){

  }

  console.log('app render')

  return (
    <>
      <Outlet context={[{data, addIdentity, addValue}]} />
 
    </>
  )
}

export default App

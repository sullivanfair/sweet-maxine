import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Shows from './components/Shows/Shows'
import About from './components/About/About'
import Listen from './components/Listen/Listen'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() 
{
  const [isHomePage, setIsHomePage] = useState(true)
  const location = useLocation()

  useEffect(() => {
    switch(location.pathname)
    {
      case '/':
        setIsHomePage(true)
        break;
      default:
        setIsHomePage(false)
    }
  }, [location.pathname])

  return (
    <>
      <Navbar isHomePage={isHomePage}/>
      <div>
        <Routes>
          <Route path='/' element={ <Hero text='Sweet Maxine' speed={5}/> } />
          <Route path='/Shows' element={ <Shows/> }/>
          <Route path='/About' element={ <About/> }/>
          <Route path='/Listen' element={ <Listen/> }/>
        </Routes>
      </div>
    </>

  )
}

export default App

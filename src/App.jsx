import { } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import{ GlobalStyles } from './assets/styles/global.jsx'

function App() {

  return (
    <>
    <GlobalStyles/>
    <Nav/>
    <Outlet/>

    <Footer/>
    </>
  )
}

export default App

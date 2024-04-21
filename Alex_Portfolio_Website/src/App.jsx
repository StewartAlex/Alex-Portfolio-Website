import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Footer from './components/Footer'
// import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
    <Routes> */}
     <Header/>
     <Banner/>
     <About/>
      {/* <Route path='#About' element={<About/>}/> */}
     <Expertise/>
     <Services/>
     <Footer/>
     {/* </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App

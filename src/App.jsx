import { React } from 'react'
import './App.css'
import Header from './layout/Header'
import About from './layout/About'
import Stories from './layout/Stories'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <Header href={"aboutus"} />
      <About id={"aboutus"} />
      <Stories />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import { Home } from './pages'
import { CustomHeader, CustomFooter } from './components'
import './App.css'

function App() {
  return (
    <>
      <CustomHeader />      
      <Home />
      <CustomFooter />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'

function App() {
  return (
    <>
      <h1>¡Te damos la <span style={{color: '#007bff'}}>bienvenida</span>!</h1>
      <h2>Contanos un poco más de ti:</h2>
      <Form/>      
    </>
  )
}

export default App

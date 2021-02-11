import React, { useState } from 'react'
import axios from 'axios'
import AppContext from '../context/AppContext'

const AddCategory = () => {
  
  const [datos, setDatos] = useState({
    name:'',
  })
  
  const API = 'http://localhost:3000/api/v1/category';
  
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = () => {
   
  console.log(datos)
    const response =  axios.post(API, datos, {
      withCredentials: true, 

    })
    console.log(response)
  }
  
  return (
    <div>
      <h1>Agregar Categoria</h1>
      <input type="text" onChange={handleInputChange} placeholder="Nombre de categoría" name="name" />
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
    
}

export default AddCategory



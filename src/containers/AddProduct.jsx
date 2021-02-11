import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '../context/AppContext'

const AddProduct = () => {
  
  const [datos, setDatos] = useState({
    name:'',
    price:0,
    description:'',
    category:'5fcedac13dab88371800b40c',
    quantity:0,
    imageCover:''
  })
  const { categories } = useContext(AppContext);
  const API = 'http://localhost:3000/api/v1/products';
  
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = () => {
    // const data= {
    //   name: 'pruebade10disdsdsgitos',
    //   price:50,
    //   description:"asdsdsdfsaf",
    //   category:"5fcedac13dab88371800b40c",
    //   quantity:22,
    //   imageCover:"asasadsfdfsdfsdsasdfasd"
    // }
  console.log(datos)
    const response =  axios.post(API, datos, {
      withCredentials: true, 

    })
    console.log(response)
  }
  
  return (
    <div>
      <h1>Agregar Producto</h1>
      <input type="text" onChange={handleInputChange} placeholder="Nombre de producto" name="name" />
      <input type="text" onChange={handleInputChange} placeholder="Descripción" name="description" />
      {/* <input type="text" placeholder="Categoría" name="category" /> */}
      <select>
        {categories.map(item =>(
          <option 
            key={item._id}
            value={item.name}
          >
            {item.name}
          </option>
      ))}
      </select>
      <input type="text" onChange={handleInputChange} placeholder="Precio" name="price" />
      <input type="text" onChange={handleInputChange} placeholder="Cantidad" name="quantity" />
      <input type="text" onChange={handleInputChange} placeholder="Foto" name="imageCover" />
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
    
}


export default AddProduct



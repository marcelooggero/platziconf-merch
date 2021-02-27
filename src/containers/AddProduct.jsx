import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '../context/AppContext'

const AddProduct = () => {
  
  const [datos, setDatos] = useState({
    name:'',
    price:0,
    description:'',
    category:'',
    quantity:0,
    imageCover:''
  })
  const { categories } = useContext(AppContext);
  const API = 'http://localhost:3000/api/v1/products';
  
  
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)

    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
    // console.log(event)
    // console.log(datos)
  }

  const handleSubmit = () => {
    // console.log(datos)
    const response =  axios.post(API, datos, {
      withCredentials: true, 
    }).then((res) => {
      if(res.status === 201){
        alert("Producto agregado exitosamente")
        setDatos({
          name:'',
          price:0,
          description:'',
          category:'',
          quantity:0,
          imageCover:''
        })
      }
    })
    // console.log(response)
  }

  const handleSelectChange = (e) => {
    let categorySelected = [];
    //  console.log(e.target.value)
    categorySelected = categories.filter((item)=> item.name === e.target.value)
    // console.log(e)
    setDatos({ 
       ...datos,
       category: categorySelected[0]._id
    });
    // console.log(categorySelected[0]._id)
    // console.log(datos)
  }
  
  return (
    <div>
      <form id="formularioAddProduct">
        <h1>Agregar Producto</h1>
        <input type="text" onChange={handleInputChange} placeholder="Nombre de producto" name="name" />
        <input type="text" onChange={handleInputChange} placeholder="Descripción" name="description" />
        {/* <input type="text" placeholder="Categoría" name="category" /> */}
        <select onChange={handleSelectChange} required>
          <option>Elija una categoría</option>
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
      </form>
    </div>
  );
    
}


export default AddProduct



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

  const handleFileChange = ( event ) =>{
    setDatos({
      ...datos,
      imageCover: event.target.files[0]
    })
  }

  const handleSubmit = () => {
    
    const data = new FormData();
    data.append('name', datos.name)
    data.append('price', datos.price)
    data.append('description', datos.description)
    data.append('category', datos.category)
    data.append('quantity', datos.quantity)
    data.append('datos', datos.imageCover, datos.imageCover.name)
    
    const response =  axios.post(API, data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
       },
      withCredentials: true, 
    }).then((res) => {
      if(res.status === 201){
        alert("Producto agregado exitosamente")
        document.getElementById("name").value=''
        document.getElementById("description").value=''
        document.getElementById("price").value=''
        document.getElementById("category").selectedIndex="0"
        document.getElementById("quantity").value=''
        document.getElementById("imageCover").value=''
       
        console.log("datos:", datos)
      }
    })
    console.log(response)
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
        <input id="name" type="text" onChange={handleInputChange} placeholder="Nombre de producto" name="name" />
        <input id="description" type="text" onChange={handleInputChange} placeholder="Descripción" name="description" />
        {/* <input type="text" placeholder="Categoría" name="category" /> */}
        <select id="category" onChange={handleSelectChange} required>
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
        <input id="price" type="text" onChange={handleInputChange} placeholder="Precio" name="price" />
        <input id="quantity" type="text" onChange={handleInputChange} placeholder="Cantidad" name="quantity" />
        <input id="imageCover" type="file" onChange={handleFileChange} placeholder="Foto" name="imageCover" />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
    
}


export default AddProduct



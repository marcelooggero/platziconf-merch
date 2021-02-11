import React, { useState, useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Login = () => {
  const [state, setState] = useState({
    user:"",
    password:""
  })

  const {addToBuyer} = useContext(AppContext);
  const history = useHistory();
  const handleChangeUser = (payload) => {
    setState({
      ...state,
      user: payload.target.value
    })
  }
  
  const handleChangePassword = (payload) => {
    setState({
      ...state,
      password: payload.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = {
          user: state.user,
          password: state.password
        };
        
        const API = 'http://localhost:3000/api/v1/users/login';
        
        axios.post(API, { 
          email: id.user,
          password: id.password
        })
          .then(res => {
            console.log(res);
            // console.log(res.data);
            // document.cookie = `token=${res.data.token}`
            // console.log(res.data.token);
            addToBuyer(res.data.data.user)
          })
          .then(()=>{
            history.push('/');
          })
        
  }
  
  return (
    <div>
      <form>
        <div>
          <h3>Login</h3>
          <input type="text" onChange={handleChangeUser} placeholder="Nombre de Usuario" name="name" required />
          <input type="password" onChange={handleChangePassword} placeholder="Contraseña" name="password" required />
          <button type="submit" onClick={handleSubmit}>Ingresar</button>
        </div>
      </form>
    </div>
    );
}

export default Login
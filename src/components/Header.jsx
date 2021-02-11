import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Header.css'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state;
  
   
  
  return (
    <div className="Header">
      <h1 className="Header-Title">
        <Link to="/">
          Almacen de Productos
        </Link>
      </h1>
      <div>
        <Link to="/login">
          {state.buyer[0] !== undefined ? state.buyer[0].name : <h2>Login</h2>}
        </Link>
      </div>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length >0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header

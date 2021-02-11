import { useState, useEffect } from 'react'
import axios from 'axios'
import initialState from '../initialState'

const API = 'https://almacendeproductos.herokuapp.com/api/v1/products';

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect (async ()=> {
        const response = await axios(API);
        setProducts(response.data.data.data);
    },[])

    useEffect (async ()=> {
        const response = await axios('https://almacendeproductos.herokuapp.com/api/v1/category');
        setCategories(response.data.data.data);
    },[])

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        products,
        categories,
        state,
    };
};

export default useInitialState;
import React from 'react';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'
import Products from '../components/Products'
import initialState from '../initialState'

const Home = () => (
  <>
    <Helmet>
      <title>Almacen de Productos - Products</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TU_USER" />
      <meta name="twitter:creator" content="@TU_USER" />
      <meta name="twitter:title" content="Almacen de Productos" />
      <meta name="twitter:description" content="Almacen de Producto" />
      <meta
        name="twitter:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:title" content="Almacen de Producto" />
      <meta property="og:description" content="Almacen de Producto" />
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Almacen de Producto" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
    <Products products={initialState.products} />
    <Link to="/agregar-producto">
      Agregar Producto
    </Link>
    <Link to="/agregar-categoria">
      Agregar Categoría
    </Link>
  </>
    )

export default Home

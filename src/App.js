import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Search from './components/search/Search';
import Products from './components/products/Products';
import GetProductos from './components/data/Api'

async function fetchData(producto) {
  if (producto !== '') {
    let data = await GetProductos(producto)
    return data
  }
}

function App() {
  const [producto, setProducto] = useState('')
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    fetchData(producto).then(setResultado)
  }, [producto])


  return (
    <Fragment>
      <div className='header'>
        <Search onChange={value => setProducto(value)} />
      </div>
      <div className="App">
        <header className="App-header">
          <Products resultado={resultado} producto={producto} />
        </header>
      </div>
    </Fragment>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search/Search';
import Products from './components/products/Products';
import GetProductos from './components/data/Api'

async function fetchData(producto) {
  if (producto !== '') {
    // console.log(`Ha cambiado el estado de producto a: ${producto}`)
    let data = await GetProductos(producto)
    // console.log('data', data)
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
    <div className="App">
      <Search onChange={value => setProducto(value)} />
      <header className="App-header">
        <Products resultado={resultado} />
      </header>
    </div>
  );
}

export default App;

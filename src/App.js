import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Search from './components/search/Search';
import Products from './components/products/Products';
import GetProducts from './components/data/Api'

async function fetchData(product) {
  if (product !== '') {
    let data = await GetProducts(product)
    return data
  }
}

function App() {
  const [product, setProduct] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    fetchData(product).then(setResult)
  }, [product])


  return (
    <Fragment>
      <div className='header'>
        <Search onChange={value => setProduct(value)} />
      </div>
      <div className="App">
        <header className="App-header">
          <Products result={result} product={product} />
        </header>
      </div>
    </Fragment>
  );
}

export default App;

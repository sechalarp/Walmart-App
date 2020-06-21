import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search/Search';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Search />
      <header className="App-header">
        <Products />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;

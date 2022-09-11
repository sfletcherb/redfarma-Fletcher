/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/List/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Detail/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { Routes, Route } from 'react-router-dom';
import  CartCustomContext  from './Context/CartContext';


function App() {
  return (

    <CartCustomContext>
      <div className="App">

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />

        </Routes>

      </div>
    </CartCustomContext>
  );
}

export default App;

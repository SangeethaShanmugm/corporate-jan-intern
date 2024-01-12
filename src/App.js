import logo from './logo.svg';
import './App.css';
import LifeCycleA from './classcomponent/LifeCycleA';
import { Routes, Route, Link } from "react-router-dom"
import { Home } from './Home';
import { ProductList } from './ProductList';
import { ProductDetail } from './ProductDetail';
import { Reducer } from './Reducer';
import { Ref } from './Ref';
import UseCallBack from './UseCallBack';
import { useState } from 'react';
import Context from './Context/Context';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';


const itemsList = [
  {
    id: 1,
    title: "Tomato",
    category: "Fruit",
    rating: 5,
  },
  {
    id: 2,
    title: "Onion",
    category: "Vegetable",
    rating: 7,
  },
  {
    id: 3,
    title: "Apple",
    category: "Fruit",
    rating: 2,
  },
  {
    id: 4,
    title: "Banana",
    category: "Fruit",
    rating: 9,
  },
]

function App() {
  //JS starts

  const people = ["Srivarthan", "Priya", "Navin", "Rahul"]//Array of strings
  //                     0           1       2         3  



  //JS ends
  //JSX starts
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/class">LifeCycleA</Link></li>
          <li><Link to="/items">ProductList</Link></li>
          <li><Link to="/reducer">Reducer</Link></li>
          <li><Link to="/ref">Ref</Link></li>
          <li><Link to="/useCallBack">UseCallBack</Link></li>
          <li><Link to="/context">Context</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<LifeCycleA />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="/items/add" element={<AddProduct />} />
        <Route path="/items/edit/:id" element={<EditProduct />} />


        <Route path="/reducer" element={<Reducer />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/useCallBack" element={<UseCallBack />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
  //JSX ends
}



export default App;

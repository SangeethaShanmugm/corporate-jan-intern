import logo from './logo.svg';
import './App.css';
import LifeCycleA from './classcomponent/LifeCycleA';
import { Routes, Route, Link } from "react-router-dom"
import { Home } from './Home';
import { ProductList } from './ProductList';
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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<LifeCycleA />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
  //JSX ends
}


function ProductDetail() {
  return (
    <div>ProductDetail Page</div>
  )
}

export default App;

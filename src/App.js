import logo from './logo.svg';
import './App.css';
import LifeCycleA from './classcomponent/LifeCycleA';
import { Routes, Route } from "react-router-dom"

function App() {
  //JS starts
  const people = ["Srivarthan", "Priya", "Navin", "Rahul"]//Array of strings
  //                     0           1       2         3  

  const items = [
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

  console.log(items)
  //JS ends
  //JSX starts
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
  //JSX ends
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from "react"

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
      {/* {people.map((person) => (
        <h1>Hello {person}</h1>
      ))} */}
      {items.map((item) => (
        <Welcome key={item.id} itemData={item} />
      ))}


    </div>
  );
  //JSX ends
}

function Welcome({ itemData }) {

  // let like = 10;
  const [like, setLike] = useState(0)
  const [show, setShow] = useState(true)

  const styles = {
    //terinary operator => condition ? if condition true  : if condition false
    color: itemData.rating >= 5 ? "green" : "red"
  }

  //true  => block => visible
  //false => none => hide

  {/* conditional styling */ }
  const contentStyle = {
    display: show ? "block" : "none"
  }

  return (
    <div>
      {/* conditional styling */}
      <h5>Title:{itemData.title} - <p style={styles}>⭐{itemData.rating}</p></h5>
      <p>Category: {itemData.category}</p>
      <div style={{ display: "flex", justifyContent: "space-around", border: "1px solid black" }}>
        {/* <h4 style={contentStyle}>Imagine the Impossible</h4> */}
        {/* conditional rendering */}
        {show ? <h4 style={contentStyle}>Imagine the Impossible</h4> : null}
        {/* show => true => !show => !true => false */}
        {/* show => false => !show => !false => true */}
        <button onClick={() => setShow(!show)}>Click</button>
      </div>
      <button onClick={() => {
        setLike(like + 1)
        console.log(like)
      }}>Like {like}</button>
    </div>
  )
}


export default App;

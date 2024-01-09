import { useState } from "react";

function Welcome({ itemData }) {

  // let like = 10;
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(true);

  const styles = {
    //terinary operator => condition ? if condition true  : if condition false
    color: itemData.rating >= 5 ? "green" : "red"
  };

  //true  => block => visible
  //false => none => hide
  { /* conditional styling */ }
  const contentStyle = {
    display: show ? "block" : "none"
  };

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
        setLike(like + 1);
        console.log(like);
      }}>Like {like}</button>
    </div>
  );
}

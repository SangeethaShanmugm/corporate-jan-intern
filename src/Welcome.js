import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export function Welcome({ itemData, onRemove }) {

  // let like = 10;
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("Like is updated")
  })


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

  const navigate = useNavigate()

  return (
    <div>
      {/* conditional styling */}

      <h5>Title:{itemData.title} - {itemData.id} <p style={styles}>⭐{itemData.rating} </p></h5>

      <div className="category-style">
        <p>Category: {itemData.category}</p>
        {/* `` => backtick + $ => interpolation  */}
        <FaInfoCircle onClick={() => navigate(`/items/${itemData.id}`)} />
      </div>

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
        // console.log(like);
      }}>Like {like}</button>
      <button onClick={()=>onRemove()}>Remove</button>
    </div>
  );
}

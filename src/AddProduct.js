import { useState } from "react";
import { API } from "./global";
import { useNavigate } from "react-router-dom"


export function AddProduct() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [rating, setRating] = useState()
  const navigate = useNavigate()

  return (
    <div className="add-product-list">
      <h1>AddProduct</h1>
      <label>Item Name: </label>
      <input type="text" value={title} onChange={(e) => {
        setTitle(e.target.value)
        console.log(title)
      }} />
      <label>Category: </label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <label>Rating: </label>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button
        onClick={() => {
          const newItems = {
            title,
            category,
            rating
          }
          //1. method: POST
          //2. body => data pass => JSON
          //3. headers => JSON
          fetch(`${API}`,
            {
              method: "POST",
              body: JSON.stringify(newItems),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then((res) => res.json())
            .then(() => navigate("/items"))

        }}
      >Add Product</button>
    </div>
  );
}


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { API } from "./global";

export function EditProduct() {
  const { id } = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`https://659e6ba547ae28b0bd35caec.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  console.log(item)
  return item ? <EditProductPage item={item} /> : "Loading..."
}


function EditProductPage({ item }) {
  const [title, setTitle] = useState(item.title)
  const [category, setCategory] = useState(item.category)
  const [rating, setRating] = useState(item.rating)
  const navigate = useNavigate()

  return (
    <div className="add-product-list">
      <h1>EditProduct</h1>
      <label>Item Name: </label>
      <input type="text" value={title} onChange={(e) => {
        setTitle(e.target.value)
        console.log(title)
      }} />
      <label>Category: </label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <label>Rating: </label>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button style={{ backgroundColor: "green" }}
        onClick={() => {
          const updatedItems = {
            title,
            category,
            rating
          }
          //1. method: PUT
          //2. body => data pass => JSON
          //3. headers => JSON
          fetch(`${API}/${item.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedItems),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then((res) => res.json())
            .then(() => navigate("/items"))

        }}
      >SAVE</button>
    </div>
  )
}
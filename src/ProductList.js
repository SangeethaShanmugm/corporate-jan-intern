import { Welcome } from './Welcome';
import { useState, useEffect, useCallback } from "react";
import { API } from './global';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom"
export function ProductList() {
  const [items, setItems] = useState([]);

  //callback
  // chefA(function chefB(){
  // //prepare cake => done 
  // }, instruction)
  const getProducts = () => {
    fetch(`${API}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }

  useEffect(() => getProducts(), []) //call only once

  // const items = [
  //   {
  //     id: 1,
  //     title: "Tomato",
  //     category: "Fruit",
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     title: "Onion",
  //     category: "Vegetable",
  //     rating: 7,
  //   },
  //   {
  //     id: 3,
  //     title: "Apple",
  //     category: "Fruit",
  //     rating: 2,
  //   },
  //   {
  //     id: 4,
  //     title: "Banana",
  //     category: "Fruit",
  //     rating: 9,
  //   },
  // ]
  const handleRemove = useCallback(() => {
    console.log("Button Clicked")
  }, [])



  const handleDelete = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then(() => getProducts());
  }
  const navigate = useNavigate()


  return (
    <div className='product-list'>
      {items.map((item) => (
        <Welcome key={item.id} itemData={item} onRemove={handleRemove}
          addButton={
            <IoIosAddCircleOutline color="blue" onClick={() => navigate("/items/add")} />
          }
          deleteButton={
            <MdDelete color="red" onClick={() => handleDelete(item.id)} />
          }
          editButton={
            <MdEdit color="purple" onClick={() => navigate(`/items/edit/${item.id}`)} />
          }
        />
      ))}
    </div>
  );
}

import { Welcome } from './Welcome';
import { useState, useEffect } from "react";

export function ProductList() {
  const [items, setItems] = useState([]);

  //callback
  // chefA(function chefB(){
  // //prepare cake => done 
  // }, instruction)
  useEffect(() => {
    fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []); //call only once






























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
  return (
    <div className='product-list'>
      {items.map((item) => (
        <Welcome key={item.id} itemData={item} />
      ))}
    </div>
  );
}

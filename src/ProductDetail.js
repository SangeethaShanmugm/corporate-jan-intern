import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  // get parameter from URL
  const { id } = useParams();
  console.log(id)
  const [item, setItem] = useState({})

  useEffect(() => {
    fetch(`https://659e6ba547ae28b0bd35caec.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>ProductDetail Page -{item.id} - {item.title}</div>
  );
}

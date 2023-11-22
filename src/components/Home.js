import React, { useState, useEffect } from "react";
import ProductList from "./ProductList"; 

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);
  console.log(items)

  return (
    <div>
     <h1>WELCOME TO SWIFTCART</h1>
        <ProductList products={items} />
    </div>
  );
}

export default Home;
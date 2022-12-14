import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const fetchProd = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProducts(json);
  };
  useEffect(() => {
    fetchProd();
  }, [products]);
  return <div>ProductList</div>;
}

export default ProductList;

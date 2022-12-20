import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PremiumCollection.css";
import ProductItem from "./Products/ProductItem";

function PremiumCollection(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const categoriesUrl = "https://fakestoreapi.com/products/categories";
  const productsUrl = "https://fakestoreapi.com/products";
  //fetch categories function
  const fetchCategories = async () => {
    //return categories array ['electronics', 'jewellery', 'mens clothing', 'womens clothing']
    const response = await axios.get(categoriesUrl);
    setCategory(response.data);
  };
  //fetch all products function
  const fetchProducts = async () => {
    //return all products
    const response = await axios.get(productsUrl);
    setProducts(response.data);
  };
  //fetch products from category on click
  const fetchProductsOnClick = async (e, { category }) => {
    e.preventDefault();
    //return all products if the user clicks on all products button
    if (category === "all products") {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setProducts(response.data);
    } else {
      const prodsInCategory = "https://fakestoreapi.com/products/category/";
      //fetch products in category clicked on
      const response = await axios.get(prodsInCategory + category);
      setProducts(response.data);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  return (
    <>
      <section className="premium-collection">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="secondary-title">
                <h2 className="secondary-title__text">
                  Our Premium Collection
                </h2>
              </div>
            </div>
          </div>
          <div className="products-collection-bar">
            <a
              className="products-collection-bar__item current-item"
              key="00"
              onClick={(event) =>
                fetchProductsOnClick(event, { category: "all products" })
              }
            >
              all products
            </a>
            {categories.map((category, index) => (
              <a
                className="products-collection-bar__item"
                key={index}
                onClick={(event) => fetchProductsOnClick(event, { category })}
              >
                {category}
              </a>
            ))}
          </div>
          <div className="products-list">
            {products.map((product, index) =>
              index <= 5 ? <ProductItem prod={product} key={index} /> : null
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PremiumCollection;

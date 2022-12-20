import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { Carousel } from 'react-carousel-minimal';
import "./Product.css";

function Product(props) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(props.ProductData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section>
        <div className="container">
          {product ? (
            <>
              <Pagination
                ProductCat={product.category}
                ProductTitle={product.title}
              />
              <div className="row">
                <div className="col">
                  <div className="img-wrapper">
                    <Carousel
                      data={product}
                      time={5000}
                      width="608px"
                      height="552px"
                      automatic={false}
                      dots={false}
                      radius="8px"
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                      thumbnails={true}
                      thumbnailWidth="171px"
                    />
                    {/* <img
                      src={product.image}
                      alt={product.title}
                      className="hover-zoom"
                    /> */}
                  </div>
                </div>
                <div className="col">
                  <div className="product-details">
                    <h2>{product.title}</h2>
                    <div>
                      <i>rating</i>
                    </div>
                    <p>${product.price}</p>
                    <h3>Details Product</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="quantity-subtotal">
                    <div className="quantity-subtotal__quantity"></div>
                    <div className="quantity-subtotal__subtotal"></div>
                    <div className="btn-section">
                      <a className="btn secondary-btn" href="#">
                        Wishlist<i></i>
                      </a>
                      <a className="btn primary-btn" href="#">
                        Add to Cart <i></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Product;

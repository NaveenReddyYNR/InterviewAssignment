import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductSpec() {
  const [productDetails, setProductDetails] = useState({});
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => {
        setProductDetails(res.data);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        {" "}
        Product Specification
      </h1>
      <div id={styles.productSpec}>
        <img id={styles.productSpecImage} src={productDetails.thumbnail} />
        <h2> {productDetails.title} </h2>
        <p> {productDetails.description} </p>
        <p>
          {" "}
          Brand : <b>{productDetails.brand} </b>{" "}
        </p>
        <p>
          {" "}
          Price : <b>{productDetails.price} $</b>{" "}
        </p>
        <p>
          {" "}
          Rating : <b> {productDetails.rating} / 5 </b>{" "}
        </p>
        <p>
          {" "}
          Stock : <b>{productDetails.stock} </b>{" "}
        </p>
        <p>
          {" "}
          category : <b>{productDetails.category} </b>{" "}
        </p>

        <Link to="../Cart">
          <button>ADD TO CART</button>
        </Link>
      </div>
    </>
  );
}

export default ProductSpec;

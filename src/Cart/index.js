import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Cart() {
  const [cartItem, setcartItem] = useState({});
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => {
        setcartItem(res.data);
      });
  }, []);
  return (
    <>
      <h1> Product Specification</h1>
      <div>
        <img src={cartItem.thumbnail} alt={Image.id} />
        <h2> {cartItem.title} </h2>
        <p> {cartItem.description} </p>
        <p>
          Brand : <b>{cartItem.brand} </b>{" "}
        </p>
        <p>
          Price : <b>{cartItem.price} $</b>{" "}
        </p>
      </div>{" "}
    </>
  );
}
export default Cart;

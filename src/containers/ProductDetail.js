import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, description, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  // console.log("product", product);
  const productDetails = async () => {
    const detail = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(detail.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      productDetails();
    }
    return () =>{
        dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="col-md-4 col-sm-12" key={id}>
          <div className="card mb-3">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <h1 className="card-text">{title}</h1>
              <p className="card-text">{description}</p>
              <p>$ {price}</p>
              <hr />
              <p>{category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
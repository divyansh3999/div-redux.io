import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, description, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

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
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      <div className="container my-5">
        {Object.keys(product).length === 0 ? (
          <div className="box">
          <div className="boxChild">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
        ) : (
          <>
            <div className="row" key={id}>
              <div className="col-md-6 col-sm-12">
                <div className=" mb-3">
                  <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="card-body">
                  <h1 className="card-text">{title}</h1>
                  <p className="card-text">{description}</p>
                  <p>$ {price}</p>
                  <hr />
                  <p>{category}</p>
                </div>
                <div className="text-end">
                  <Link to="/" className="btn text-right btn-success">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;

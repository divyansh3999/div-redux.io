import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // console.log("products", products);
  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;

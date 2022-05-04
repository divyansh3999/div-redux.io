import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../codepen.css";
import { store } from "../redux/store";
import {
  setDescProducts, removeDescProducts
} from "../redux/actions/productAction";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const stateData = store.getState();
  const dataDesc = stateData.setDescProduct.descData;

  const products = useSelector((state) => state.allProducts.products);

  const descProductClick = () => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((response) => dispatch(setDescProducts(response.data)))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    dispatch(removeDescProducts());
  }, [])
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <main className="col-md-12 col-lg-12">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">All Products</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={descProductClick}
                      >
                        DESC
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
        {dataDesc ? (
          <div className="row">
            {dataDesc?.map((product, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <Link to={`/product/${product.id}`}>
                  <div className="product-grid">
                    <div className="product-image">
                      <div className="image">
                        <img src={product.image} />
                      </div>
                      <span className="product-sale-label">
                        {product.category}
                      </span>
                      <ul className="product-links">
                        <li>
                          <i className="fa fa-heart"></i>
                        </li>
                        <li>
                          <i
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i className="fa fa-search"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h3 className="title">{product.title.slice(0, 25)}</h3>
                      <div className="price">$ {product.price}</div>
                      <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <Link to={`/product/${product.id}`}>
                  <div className="product-grid">
                    <div className="product-image">
                      <div className="image">
                        <img src={product.image} />
                      </div>
                      <span className="product-sale-label">
                        {product.category}
                      </span>
                      <ul className="product-links">
                        <li>
                          <i className="fa fa-heart"></i>
                        </li>
                        <li>
                          <i
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i className="fa fa-search"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h3 className="title">{product.title.slice(0, 25)}</h3>
                      <div className="price">$ {product.price}</div>
                      <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductComponent;

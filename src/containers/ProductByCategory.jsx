import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedCategory,
  removeSelectedCategory,
} from "../redux/actions/productAction";

export default function ProductByCategory() {
  const cateByData = useSelector((state) => state.categoryAllData);
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const cateApi = async () => {
    const cateDetails = await axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .catch((err) => console.log("error : ", err));
    dispatch(selectedCategory(cateDetails.data));
  };
  useEffect(() => {
    if (categoryName && categoryName !== "") {
      cateApi();
    }
    return () => {
      dispatch(removeSelectedCategory());
    };
  }, [categoryName]);
  console.log(categoryName, "data", cateByData);
  return (
    <>
      <div className="container py-5">
        {Object.keys(cateByData).length === 0 ? (
          <div className="box">
          <div className="boxChild">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
        ) : (
          <div className="row">
            {cateByData?.payload?.map((product, index) => (
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
}

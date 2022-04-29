import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/productAction";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const loginInfo = useSelector((state) => state);
  const loginStatus = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(login(""));
    navigate('/login');
  };
  return (
    <>
      <div className="container">
        <button className="btn btn-danger my-2" onClick={logout}>
          Logout
        </button>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 col-sm-12" key={index}>
              <Link to={`/product/${product.id}`}>
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h1 className="card-text">{product.title.slice(0, 25)}</h1>
                    <p className="card-text">
                      {product.description.slice(0, 60)}
                    </p>
                    <p>$ {product.price}</p>
                    <hr />
                    <p>{product.category}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductComponent;

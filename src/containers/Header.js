import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, setCategory } from "../redux/actions/productAction";
import { store } from "../redux/store";
import "../style.css";

const Header = () => {
  // <!------------ category name -------------->
  const cateData = useSelector((state) => state.allCategory);
  // console.log("catedata", cateData);
  // const { categoryInfo } = cateData;
  const fetchCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        dispatch(setCategory(response.data));
      })
      .catch((err) => console.log("error : ", err));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  // <!------------ end category -------------->
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(login(""));
    navigate("/login");
  };
  const user = store.getState();
  const token = user.login.loginInfo;
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex custom-logo bg-light align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                alt=""
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  All Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-new dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#fff" }}
                >
                  All Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {cateData?.categoryInfo?.map((categories, index) => (
                    <li key={index}>
                      <Link
                        className="text-capitalize dropdown-item"
                        to={`/category/${categories}`}
                      >
                        {categories}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="text-end">
              {!token ? (
                <div>
                  <Link to="/login" className="btn btn-outline-light me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-warning">
                    Signup
                  </Link>
                </div>
              ) : (
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

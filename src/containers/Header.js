import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/productAction";
import { store } from "../redux/store";
import "../style.css"

const Header = () => {
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
      <header class="bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex custom-logo bg-light align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                alt=""
              />
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" class="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>
            <div class="text-end">
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

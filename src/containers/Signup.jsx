import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const signInfo = useSelector((state) => state.signInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
      const detail = axios
      .post(`http://localhost:4000/api/signup`, {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmPassword,
      }).then((res)=> {
        // console.log("res",res)
        if (res?.data?.error) {
          toast.error(res.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          dispatch(signup(data));
          navigate('/login');
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
  return (
    <>
    {/* <h5>{error}</h5> */}
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="section">
              <h1>
                Signup <span>Yourself</span>
              </h1>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
            </div>
          </div>
          <form
            className="col-md-10 mx-auto col-lg-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="textName"
                  placeholder="First Name"
                  required
                  {...register("firstName")}
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last Name"
                  required
                  {...register("lastName")}
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="signupEmail"
                  placeholder="name@example.com"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  {...register("email")}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  minLength="8"
                  className="form-control"
                  id="signupPassword"
                  placeholder="Password"
                  required
                  {...register("password")}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="signupcPassword"
                  minLength="8"
                  placeholder="Confirm Password"
                  required
                  {...register("confirmPassword")}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                Already have an account ! Please <Link to="/login">Login</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

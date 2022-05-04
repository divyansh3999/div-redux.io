import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, error } from "../redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const loginInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) =>{
      const url = "http://localhost:4000/api/login";
      await axios.post(url, {
        email: data.email,
        password: data.password
      }).then((response)=>{
        if (response.data.success == true) {
          dispatch(login(response.data.token));
          navigate('/');
        }else{
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }).catch((err) =>{
        console.log("error", err);
      });
  }
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="section">
              <h1>
                Login <span>Yourself</span>
              </h1>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating my-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  {...register("email")}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  {...register("password")}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                className="w-100 btn my-2 btn-lg btn-primary"
                type="submit"
              >
                Login
              </button>
              <hr className="my-4" />
              <Link
               to="/signup"
                className="w-100 btn btn-lg btn-primary"
                
              >
                Create An Account
              </Link>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
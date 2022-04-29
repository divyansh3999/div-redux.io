import { ActionTypes } from "../contants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";
import axios from "axios";

// redux thunk
export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

  // console.log(response);
  // return {
  //     type:ActionTypes.SET_PRODUCTS,
  //     payload: response
  // }
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const signup = (signInfo) => {
  return {
    type: ActionTypes.SIGNUP,
    payload: signInfo,
  };
};

export const login = (loginInfo) => {
  return {
    type: ActionTypes.LOGIN,
    payload: loginInfo,
  };
};
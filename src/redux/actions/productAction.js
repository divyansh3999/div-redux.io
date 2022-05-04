import { ActionTypes } from "../contants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";
import axios from "axios";

// redux thunk
export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setDescProducts = (descProducts) => {
  return {
    type: ActionTypes.SET_DESC_PRODUCTS,
    payload: descProducts,
  };
};

export const removeDescProducts = () => {
  return {
    type: ActionTypes.REMOVE_DESC_PRODUCTS,
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

export const setCategory = (categoryInfo) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_CATEGORIES,
    payload: categoryInfo,
  };
};

export const selectedCategory = (categoryProduct) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT_CATEGORY,
    payload: categoryProduct,
  };
};

export const removeSelectedCategory = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT_CATEGORY,
  };
};
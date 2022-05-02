import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

const signInfo = {
  signInfo: [],
  // error: "password not matched"
};
const loginInfo = {
  loginInfo: [],
};
const isLoggedin = {
  isLoggedin: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const signupReducer = (state = signInfo, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGNUP:
      return { ...state, signInfo: payload };
    default:
      return state;
  }
};

export const loginReducer = (state = loginInfo, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return { ...state, loginInfo: payload };
    default:
      return state;
  }
};

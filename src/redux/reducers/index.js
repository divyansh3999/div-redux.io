import { combineReducers } from "redux";
import { loginReducer, productReducer, selectedProductReducer, signupReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    signup: signupReducer,
    login: loginReducer
})

export default reducers;
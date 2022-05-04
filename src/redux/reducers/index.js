import { combineReducers } from "redux";
import { loginReducer, productReducer, selectedProductReducer, signupReducer, categoriesData, selectedCategoryData, descProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    signup: signupReducer,
    login: loginReducer,
    allCategory: categoriesData, 
    categoryAllData: selectedCategoryData,
    setDescProduct:descProductReducer,
})

export default reducers;
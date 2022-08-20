import { compose, legacy_createStore , applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { deleteOrderReducer, orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';
import {  productCategoryListReducer, ProductCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer } from './reducers/productReducers';
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateUserProfileReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
         ? JSON.parse(localStorage.getItem('userInfo'))
         : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
        shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
        paymentMethod: 'PayPal',
      },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateUserProfileReducer,
    productCreate:ProductCreateReducer,
    productUpdate:productUpdateReducer,
    orderList : orderListReducer,
    productDelete : productDeleteReducer,
    deleteOrder : deleteOrderReducer,
    orderDeliver: orderDeliverReducer,
    productCategoryList: productCategoryListReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;
import React, {  }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './Screens/SigninScreen';

import { BrowserRouter, Link, Route } from 'react-router-dom'
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import paymentMethodScreen from './Screens/paymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './Screens/SearchScreen';
import { useEffect } from 'react';
import { listProductCategories } from './actions/action';



function App() {
    const cart =useSelector((state) => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }
    useEffect(() => {
      dispatch(listProductCategories());
    },[dispatch]);
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">amazona</Link>
                </div>
                <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
                <div>
                    <Link to="/cart">cart
                    {cartItems.length > 0 && (
                    <span className='badge'>{cartItems.length}</span>)}
                    </Link>
                    {userInfo ? (
                        <div className="dropdown">
                        <Link to="#">
                            {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
                        </Link>
                        <ul className='dropdown-content' >
                            <li>
                                <Link to='/profile'>User Profile</Link>
                            </li>
                            <li>
                            <Link to="/orderhistory">Order History</Link>
                            </li>
                            <li>
                            <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                            </li>

                        </ul>
                        </div>
                    ) : (  <Link to="/signin">Sign In</Link>
                    )}
                                {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/product/:id" component={ProductScreen} exact></Route>
                <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
                <Route path='/signin' component={SigninScreen}></Route>
                <Route path='/register' component={RegisterScreen}></Route>
                <Route path='/shipping' component={ShippingAddressScreen}></Route>
                <Route path='/payment' component={paymentMethodScreen}></Route>
                <Route path='/placeorder' component={PlaceOrderScreen}></Route>
                <Route path='/order/:id' component={OrderScreen}></Route>
                <Route path='/orderhistory' component={OrderHistoryScreen}></Route>
                <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
                <PrivateRoute path='/profile' component={ProfileScreen} ></PrivateRoute>
                <AdminRoute path='/productlist' component={ProductListScreen} exact ></AdminRoute>
                <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
                          {/* <AdminRoute
            path="/deleteproduct"
            component={}
          ></AdminRoute> */}
                <Route path="/" component={HomeScreen} exact></Route>
                
            </main>
            <footer className="row center">All right reserved</footer>    
        </div>
        </BrowserRouter>
  );
}

export default App;

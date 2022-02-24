import 'antd/dist/antd.css'
import 'daemonite-material/css/material.min.css'
import {Route, Switch} from "react-router-dom";
import React, {Fragment, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Header from "./components/nav/header";
import ForgetPassword from "./pages/auth/forgetPassword";
import AuthRoute from "./components/auth";
import Dashboard from "./pages/admin/dashboard";
import {useDispatch} from "react-redux";
import {getTokenInfo, hasToken} from "./utils/storage";
import {getUserProfile} from "./store/actions/profile";

function App(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(hasToken()){
            dispatch(getUserProfile())
        }
    },[dispatch])
    return (

        <Fragment>
            <Header/>
            <ToastContainer/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/resetPassword' component={ForgetPassword}/>
                <AuthRoute path="/admin/dashboard" component={Dashboard}></AuthRoute>
            </Switch>
      </Fragment>

  );
}

export default App;

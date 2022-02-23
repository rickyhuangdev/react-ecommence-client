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
import {auth} from "./utils/firebase";
import {useDispatch} from "react-redux";
import {saveUserInfo} from "./store/actions/login";
import ForgetPassword from "./pages/auth/forgetPassword";

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged(async function (user) {
            if (user) {
                // User is signed in.
                const idTokenResult = await user.getIdTokenResult()
                dispatch(saveUserInfo({
                    email: user.email,
                    token: idTokenResult.token
                }))
            }
        });
    }, [])
    return (

        <Fragment>
            <Header/>
            <ToastContainer/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/resetPassword' component={ForgetPassword}/>
            </Switch>
      </Fragment>

  );
}

export default App;

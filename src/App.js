import 'antd/dist/antd.css'
import 'daemonite-material/css/material.min.css'
import {Route, Switch} from "react-router-dom";
import React, {Fragment, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/nav/header";
import AuthRoute from "./components/auth";
import {useDispatch} from "react-redux";
import {hasToken} from "./utils/storage";
import {createOrUpdateUser, getUserProfile} from "./store/actions/profile";
import publicRoutes from "./routes/publicRoutes";
import Dashboard from "./pages/user/dashboard";
import PrivateRoutes from "./routes/privateRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        if (hasToken()) {
            dispatch(createOrUpdateUser())
        }
    }, [dispatch])
    return (

        <Fragment>
            <Header/>
            <ToastContainer/>
            <Switch>
                {
                    publicRoutes.map(
                        ({path, component, ...routes}) =>
                            <Route key={path} path={path} component={component} {...routes} />
                    )
                }
                {/*<AuthRoute path="/admin/dashboard" component={Dashboard}></AuthRoute>*/}
                {
                    PrivateRoutes.map(
                        ({path, component, ...routes}) =>
                            <Route key={path} path={path} component={component} {...routes} />
                    )
                }
                <AdminRoutes path='/admin/dashboard' component={AdminDashboard} />
            </Switch>
      </Fragment>

  );
}

export default App;

import 'antd/dist/antd.css'
import './index.css'
import 'daemonite-material/css/material.min.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {Fragment, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/nav/header";
import {useDispatch, useSelector} from "react-redux";
import publicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import AuthRoutes from "./routes/authRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import Footer from "./components/nav/footer";


function App(props) {
    return (
        <BrowserRouter>
            <Fragment>
                <Header/>
                <ToastContainer/>
                <main>

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
                                <UserRoutes key={path} path={path} component={component} {...routes} />
                        )
                    }
                    {
                        AuthRoutes.map(
                            ({path, component, ...routes}) =>
                                <AdminRoutes key={path} path={path} component={component} {...routes} />
                        )
                    }

                    </Switch>

                </main>
                <Footer/>
            </Fragment>
        </BrowserRouter>

  );
}

export default App;

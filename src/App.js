import 'antd/dist/antd.css'
import './index.css'
import 'daemonite-material/css/material.min.css'
import {Route, Switch} from "react-router-dom";
import React, {Fragment, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/nav/header";
import {useDispatch, useSelector} from "react-redux";
import {createOrUpdateUser} from "./store/actions/profile";
import publicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import AuthRoutes from "./routes/authRoutes";


function App(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.profile.user)
    useEffect(() => {
        if (user && user.token) {
            console.log(user.token)
        }
    }, [])
    return (

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
                                <Route key={path} path={path} component={component} {...routes} />
                        )
                    }
                    {
                        AuthRoutes.map(
                            ({path, component, ...routes}) =>
                                <Route key={path} path={path} component={component} {...routes} />
                        )
                    }

                </Switch>
            </main>
      </Fragment>

  );
}

export default App;

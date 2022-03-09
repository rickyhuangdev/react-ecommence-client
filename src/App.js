import 'antd/dist/antd.css'
import './index.css'
import '../src/assets/css/bootstrap.min.css'
// import 'daemonite-material/css/material.min.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {Fragment, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/header";
import {useDispatch, useSelector} from "react-redux";
import publicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import AuthRoutes from "./routes/authRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import Footer from "./components/nav/footer";
import HeaderDefault from "./components/header/HeaderDefault";
import {getUserProfile, setUser} from "./store/actions/profile";
import {getUserProfileApi} from "./api/user";
import NotFound from "./pages/NotFound";


function App(props) {
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     getUserProfileApi().then(res=>{
    //         if(res){
    //             dispatch(setUser({
    //                 email: res.email,
    //                 name: res.name,
    //                 image:res.picture,
    //             }))
    //         }
    //     }).catch(err=>{
    //         console.log(err.response)
    //     })
    //
    // })
    return (

        <BrowserRouter>
            <Fragment>
                <HeaderDefault/>
                <ToastContainer autoClose={3000}/>
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

                        <Route path="/404" component={NotFound} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                </main>
                <Footer/>
            </Fragment>
        </BrowserRouter>

  );
}

export default App;

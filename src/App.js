
import 'antd/dist/antd.css'
import './assets/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import React, {Fragment} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Header from "./components/nav/header";

function App(props) {
  return (
      <Fragment>
          <Header/>
          <ToastContainer />
          <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
          </Switch>
      </Fragment>

  );
}

export default App;

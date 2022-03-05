import React from 'react';
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import RedirectRoute from "./RedirectRoute";

const UserRoutes = ({children, ...rest}) => {
    const loginInfo = useSelector(state => state.login.userInfo)
    return loginInfo && loginInfo.token ? (
        <Route {...rest} render={() => children}/>) : (<RedirectRoute message="Please Login first" location="/login?redirect=user"/>)
};

export default UserRoutes;

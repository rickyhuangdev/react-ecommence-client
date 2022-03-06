import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const UserRoutes = ({children, ...rest}) => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    return userInfo ? (
        <Route {...rest} render={() => children}/>) : (
        <Redirect to="/login?redirect=user"></Redirect>
    )
};

export default UserRoutes;

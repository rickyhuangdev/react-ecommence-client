import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const AdminRoutes = ({children, ...rest}) => {
    const user = useSelector(state => state.profile.user)
    return user && user.user_id ? (
        <Route {...rest} render={() => children}/>) : (<h1>123</h1>)
};

export default AdminRoutes;

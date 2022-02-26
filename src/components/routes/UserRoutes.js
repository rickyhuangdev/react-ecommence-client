import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import RedirectRoute from "./RedirectRoute";

const UserRoutes = ({children, ...rest}) => {
    const user = useSelector(state => state.profile.user)
    return user && user.token ? (
        <Route {...rest} render={() => children}/>) : (<RedirectRoute message="Please Login first" location="/login"/>)
};

export default UserRoutes;

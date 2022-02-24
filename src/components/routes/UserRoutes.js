import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const UserRoutes = ({children, ...rest}) => {
    const user = useSelector(state => state.profile.user)
    return user && user.user_id ? (
        <Route {...rest} render={() => children}/>) : (<Redirect to="/login"></Redirect>)
};

export default UserRoutes;

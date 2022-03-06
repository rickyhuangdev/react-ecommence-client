import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {getAdminProfileApi} from "../../api/user";
import {toast} from "react-toastify";
import RedirectRoute from "./RedirectRoute";

const AdminRoutes = ({component: Component, key, path, ...rest}) => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    return (
        <Route {...rest} render={props => {
            // 如果有 token，则展示传入的组件
            if (userInfo && userInfo.isAdmin) {
                return <Component />
            }
            // 否则调用 Redirect 组件跳转到登录页
            return (
                <RedirectRoute message="Access Denied" location="/"/>
            )
        }} />)
};

export default AdminRoutes;

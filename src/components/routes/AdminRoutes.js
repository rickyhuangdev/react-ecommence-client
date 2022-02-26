import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {getAdminProfileApi} from "../../api/user";
import {toast} from "react-toastify";
import RedirectRoute from "./RedirectRoute";

const AdminRoutes = ({component: Component, key, path, ...rest}) => {
    const user = useSelector(state => state.profile.user)
    const [admin, setAdmin] = useState(false)
    console.log(rest)
    // console.log(admin)
    useEffect(() => {
        if (user && user.token) {
            getAdminProfileApi().then(res => {
                if (res && res.role === 'admin') {
                    setAdmin(true)
                }
            }).catch(err => {
                toast.error(err)
                setAdmin(false)
            })


        }

    }, [user])

    return (
        <Route {...rest} render={props => {
            // 如果有 token，则展示传入的组件
            if (admin) {
                return <Component />
            }
            // 否则调用 Redirect 组件跳转到登录页
            return (
                <RedirectRoute message="Access Denied" location="/user"/>
            )
        }} />)
};

export default AdminRoutes;

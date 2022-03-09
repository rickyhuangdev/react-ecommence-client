import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route} from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import {getUserProfileApi} from "../../api/user";

const AdminRoutes = ({component: Component, key, path, ...rest}) => {
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch()
    const {userInfo, success} = loginInfo
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        if(userInfo){
            const config = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
            getUserProfileApi(config).then(re => {
                setAdmin(re.isAdmin)
            })
        }

    }, [dispatch, loginInfo])
    return (
        <Route {...rest} render={props => {
            // 如果有 token，则展示传入的组件
            if (userInfo&&admin) {
                return <Component/>
            }

            // 否则调用 Redirect 组件跳转到登录页
            return (
                <RedirectRoute message="Access Denied" location="/"/>
            )
        }} />)
};

export default AdminRoutes;

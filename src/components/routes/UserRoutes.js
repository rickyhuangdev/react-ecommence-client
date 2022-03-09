import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {getUserProfileApi} from "../../api/user";

const UserRoutes = ({children, ...rest}) => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    const [islogin, setIslogin] = useState(false)
    useEffect(() => {
        if (userInfo) {
            const config = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
            getUserProfileApi(config).then(re => {
                if (re) {
                    setIslogin(true)
                } else {
                    setIslogin(false)
                }
            })
        }
    }, [])
    return userInfo && islogin ? (
        <Route {...rest} render={() => children}/>) : (
        <Redirect to="/login?redirect=user"></Redirect>
    )
};

export default UserRoutes;

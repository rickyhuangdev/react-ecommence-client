import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {getAdminProfileApi} from "../../api/user";
import {hasToken} from "../../utils/storage";

const AdminRoutes = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.profile.user)
    const [admin, setAdmin] = useState(false)
    useEffect(() => {

        if (user && user.token) {
            getAdminProfileApi().then((res) => {
                if (res) {
                    setAdmin(true)
                }
            }).catch(err => {
                console.log(err.response)
            })

        }

    })
    return admin ? (
        <Route {...rest} render={() => {return <Component></Component>}}></Route>) : (<h1>123</h1>)
};

export default AdminRoutes;

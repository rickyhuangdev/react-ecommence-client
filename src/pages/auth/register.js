import React, {useEffect} from 'react';
import LoginAndRegisterForm from "../../components/form/loginAndRegisterForm";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Register = () => {
    const userInfo = useSelector(state => state.login.userInfo)
    const history = useHistory()
    useEffect(() => {
        if (userInfo && userInfo.token) history.replace('/')
    }, [userInfo])
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight: '65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Register</h4>
                    <LoginAndRegisterForm islogin={false} loginText="Register"/>
                </div>
            </div>
        </div>
    );
    };

    export default Register;

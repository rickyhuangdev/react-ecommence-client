import React, {useEffect} from 'react';
import LoginAndRegisterForm from "../../components/form/loginAndRegisterForm";
import {useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

const Login = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo,loading,error} = loginInfo
    const history = useHistory()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [userInfo, history, redirect])

    const loginRedirect = (res) => {
        let intended = history.location.state
        if (intended) {
            history.replace(intended.from)
        } else {
            if (res.role === 'admin') {
                history.replace('/')
            } else {
                history.replace('/')
            }
        }
    }
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight: '65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Login</h4>
                    {error && (
                        <div className="alert alert-dismissible alert-danger">
                            <p className="mb-0">{error}</p>
                        </div>
                    )}
                    <LoginAndRegisterForm islogin={true} loginText="Login with Email/Password"
                                          loginRediect={loginRedirect}/>
                </div>
            </div>
        </div>
    );
};

export default Login;

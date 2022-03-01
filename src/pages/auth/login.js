import React, {useEffect} from 'react';
import LoginAndRegisterForm from "../../components/form/loginAndRegisterForm";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Login = () => {
    const login = useSelector(state => state.login)
    const history = useHistory()
    useEffect(() => {
        let intended = history.location.state
        if (intended) {
            return
        } else {
            if (login && login.token) history.replace('/')
        }

    }, [login])

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
                    <LoginAndRegisterForm islogin={true} loginText="Login with Email/Password"
                                          loginRediect={loginRedirect}/>
                </div>
            </div>
        </div>
    );
};

export default Login;

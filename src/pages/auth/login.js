import React from 'react';
import LoginAndRegisterForm from "../../components/form/loginAndRegisterForm";
const Login = () => {
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight:'65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Login</h4>
                    <LoginAndRegisterForm islogin={true} loginText="Login with Email/Password" />
                </div>
            </div>
        </div>
    );
};

export default Login;

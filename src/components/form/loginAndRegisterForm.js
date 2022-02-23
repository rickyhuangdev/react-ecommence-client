import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login, saveUserInfo} from "../../store/actions/login";
import {useHistory, useLocation} from "react-router-dom";
import {Button} from "antd";
import {GoogleOutlined, MailOutlined} from "@ant-design/icons";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const LoginAndRegisterForm = (prop) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || email === '') {
            toast.warning("Please fill in the email")
            return
        }
        if (!password || password === '') {
            toast.warning("Please fill in the password")
            return

        }
        if (password.length < 6 ){
            toast.warning("Password should be at least 6 characters")
            return
        }
        dispatch(login(email, password, prop.islogin));
        const {state} = location
        if (!state) {
            history.replace('/')
        } else {
            history.replace(state.from)
        }

    }

    const handleGoogleLogin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const idTokenResult = await user.getIdTokenResult()
                dispatch(saveUserInfo({
                    email: user.email,
                    token: idTokenResult.token,
                    name: user.displayName ?? user.email
                }))
                toast.success("Login Successfully")
                const {state} = location
                if (!state) {
                    history.replace('/')
                } else {
                    history.replace(state.from)
                }
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            toast.error(errorMessage)
            // ...
        });

    }

    return (
        <form className='mt-5'>
            <h1>{prop.islogin}</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       onChange={(event => setEmail(event.target.value))}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                       onChange={(event => setPassword(event.target.value))}/>
            </div>
            {/*<button type="submit" className="btn btn-success">Submit</button>*/}
            <Button type="primary"  disabled={!email || password.length < 6} onClick={handleSubmit} block
                    className="mt-3">
                {prop.islogin ? <MailOutlined/> : ''} {prop.loginText}
            </Button>
            <Button type="primary" danger onClick={handleGoogleLogin} block className="mt-3">
                {prop.islogin ? <GoogleOutlined/> : ''} Login With Google
            </Button>
        </form>
    );
};

export default LoginAndRegisterForm;

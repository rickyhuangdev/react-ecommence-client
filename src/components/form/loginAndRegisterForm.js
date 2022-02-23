import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login, saveToken, saveUserInfo} from "../../store/actions/login";
import {Link, useHistory, useLocation} from "react-router-dom";
import {Button} from "antd";
import {GoogleOutlined, MailOutlined} from "@ant-design/icons";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

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
        if (password.length < 6) {
            toast.warning("Password should be at least 6 characters")
            return
        }
        let auth = getAuth();
        let tokenInfo = null
        if (!prop.islogin) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    tokenInfo = userCredential._tokenResponse.refreshToken
                    const idTokenResult = await user.getIdTokenResult()
                    dispatch(saveUserInfo({
                        email: user.email,
                        token: idTokenResult.token,
                        name: user.displayName ?? user.email
                    }))
                    history.push('/')
                    toast.success('Register Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(userCredential)
                    // ...
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    let message = null
                    switch (errorCode) {
                        case 'auth/weak-password':
                            message = "Password should be at least 6 characters"
                            break;
                        case 'auth/email-already-in-use':
                            message = "This email address is already being used"
                            break;
                        default:
                            message = null;
                    }

                    toast.error(`${message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const idTokenResult = await user.getIdTokenResult()
                    dispatch(saveUserInfo({
                        email: user.email,
                        token: idTokenResult.token,
                        name: user.displayName ?? user.email
                    }))
                    toast.success('Login Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    history.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let message = null
                    switch (errorCode) {
                        case 'auth/wrong-password':
                            message = "Invalid username or password, Please try again"
                            break;
                        case 'auth/user-not-found':
                            message = "This email address does not exist"
                            break;
                        default:
                            message = null;
                    }
                    toast.error(`${message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
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
            <div className="mt-3" style={{color:'red'}}>
                <Link to="/resetPassword">Forgot Password ?</Link>
            </div>
        </form>
    );
};

export default LoginAndRegisterForm;

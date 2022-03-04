import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login, saveToken} from "../../store/actions/login";
import {Link, useHistory, useLocation} from "react-router-dom";
import {GoogleOutlined, MailOutlined} from "@ant-design/icons";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {setUser} from "../../store/actions/profile";

const LoginAndRegisterForm = (prop) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sendingData, setSendingData] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSendingData(true)
        if (!email || email === '') {
            toast.warning("Please fill in the email")
            setSendingData(false)
            return
        }
        if (!password || password === '') {
            toast.warning("Please fill in the password")
            setSendingData(false)
            return

        }
        if (password.length < 6) {
            toast.warning("Password should be at least 6 characters")
            setSendingData(false)
            return
        }
        if (!prop.islogin) {


        } else {
            dispatch(login(email, password))

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
                dispatch(saveToken(idTokenResult.token))
                dispatch(setUser({
                    email: user.email,
                    name: user.displayName,
                    image: user.photoURL,
                    token: idTokenResult.token
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
        <form className='mt-3'>
            <h1>{prop.islogin}</h1>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       onChange={(event => setEmail(event.target.value))}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                       onChange={(event => setPassword(event.target.value))}/>
            </div>
            {/*<button type="submit" className="btn btn-success">Submit</button>*/}
           <div className="form-group mb-3">
               <button className="btn d-blue-bg d-flex align-items-center text-white shadow rounded" type="button" onClick={handleSubmit}>{prop.islogin ? <MailOutlined className="me-2"/> : ''} {prop.loginText}</button>
           </div>
            <button type="button"  onClick={handleGoogleLogin}  className="mt-3 btn btn-danger d-flex align-items-center text-white shadow rounded">
                {prop.islogin ? <GoogleOutlined className="me-2"/> : ''} Login With Google
            </button>
            <div className="mt-3" style={{color:'red'}}>
                <Link to="/resetPassword">Forgot Password ?</Link>
            </div>
        </form>
    );
};

export default LoginAndRegisterForm;

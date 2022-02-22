import React, {useState} from 'react';
import {toast} from "react-toastify";
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {setTokenInfo} from "../../utils/storage";
import {app}from '../../utils/firebase'
const LoginAndRegisterForm = (prop) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        const auth = getAuth();
        if(prop.islogin !==true){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setTokenInfo(userCredential._tokenResponse.refreshToken)
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
        }else{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                     setTokenInfo(userCredential._tokenResponse.refreshToken)
                    toast.success('Login Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // ...
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
    return (
        <form className='mt-5' onSubmit={handleSubmit}>
            <h1>{ prop.islogin}</h1>
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
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    );
};

export default LoginAndRegisterForm;

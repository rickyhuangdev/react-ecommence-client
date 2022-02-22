import React, {useState} from 'react';
import {toast} from 'react-toastify';

import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app}from '../../utils/firebase'
import {setTokenInfo} from "../../utils/storage";
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit =async (e) => {
        e.preventDefault()
        if (!email || email ===''){
            toast.warning("Please fill in the email")
            return
        }
        if (!password || password===''){
            toast.warning("Please fill in the password")
            return
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setTokenInfo(userCredential._tokenResponse.refreshToken)
                toast.success('🦄 Register Successfully!', {
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
                console.log(errorCode)
                console.log(errorMessage)
                return
                let message = null
                switch (errorCode){
                    case 'auth/weak-password':
                        message ="Password should be at least 6 characters"
                        break;
                        case 'auth/email-already-in-use':
                        message ="This email address is already being used"
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

    }
    const registerForm = () => (

            <form className='mt-5' onSubmit={handleSubmit}>
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

    )

    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight:'65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
    };

    export default Register;

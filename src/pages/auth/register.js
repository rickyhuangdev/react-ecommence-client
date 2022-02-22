import React, {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app}from '../../utils/firebase'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit =async (e) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(userCredential)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                <ToastContainer/>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
    };

    export default Register;

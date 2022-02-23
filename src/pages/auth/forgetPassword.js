import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {auth} from "../../utils/firebase";
import {sendPasswordResetEmail} from 'firebase/auth'
import {Link} from "react-router-dom";

const ForgetPassword = ({history}) => {
    let [email, setEmail] = useState('')
    let [loading, setLoading] = useState(false)
    useEffect(() => {
    })

    const resetPasswordHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!email) {
            toast.warn("Please enter your email")
            setLoading(false)
            return
        }
        let actionCodeSettings = {
            url: process.env.REACT_APP_WEBSITE_REDIRECT_URL, handleCodeInApp: true
        };
        await sendPasswordResetEmail(auth, email).then(function () {
            // Password reset email sent.
            setEmail('')
            toast.success('Check your email for password reset link')

        })
            .catch(function (error) {
                // Error occurred. Inspect error.code.
                let errMessage = null
                switch (error.code) {
                    case 'auth/user-not-found':
                        errMessage = 'There is no user corresponding to the email address.'
                        break;
                    case 'auth/invalid-email':
                        errMessage = 'The email address is not valid.'
                        break;
                    default:
                        errMessage = "Loading"
                }
                toast.error(error.message)
            }).finally(function () {

                setLoading(false)
            });

    }
    return (
        <div className="container py-5 d-flex justify-content-center align-items-center ">

            <div className="row">
                <div className="col col-12">
                    <h4>Reset your password</h4>
                    <form style={{width: '25rem'}} className="mt-3">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   onChange={(e) => setEmail(e.target.value)} value={email}
                                   aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <button type="button" className="btn btn-primary btn-block" onClick={resetPasswordHandler}
                                disabled={loading || !email}>
                            Submit
                        </button>
                        <Link to='/login' className="mt-2 d-block">Back to login</Link>
                    </form>


                </div>
            </div>
        </div>);
};

export default ForgetPassword;

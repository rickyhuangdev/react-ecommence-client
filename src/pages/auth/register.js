import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {register} from "../../store/actions/login";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isStrongPassword from 'validator/lib/isStrongPassword';

const Register = () => {
    const {userInfo, loading, error} = useSelector(state => state.register)
    const loginInfo = useSelector(state => state.login)
    const {userInfor} = loginInfo
    const history = useHistory()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [userInfo, history, redirect])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty(name)) {
            setMessage("Name is required")
        } else if (isEmpty(email)) {
            setMessage("Email is required")
        } else if (!isEmail(email)) {
            setMessage("Invalid Email Address")
        } else if (isEmpty(password)) {
            setMessage("Password is required")
        } else if (password.length < 6) {
            setMessage("Password should be at least 6 characters")
        } else if (isStrongPassword(password)) {
            setMessage("Weak password")
        } else if (password !== confirmPassword) {
            setMessage("Password do not match")
        } else {
            dispatch(register(name, email, password))
        }


    }
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight: '65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Register</h4>
                    {message && <Message variant="danger" children={message}/>}
                    {error && <Message variant="danger" children={error}/>}
                    <form className='mt-3'>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name}
                                   aria-describedby="emailHelp"
                                   onChange={(event => setName(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" value={email}
                                   aria-describedby="emailHelp"
                                   onChange={(event => setEmail(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" value={password}
                                   onChange={(event => setPassword(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm_password"
                                   onChange={(event => setConfirmPassword(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn d-blue-bg d-flex align-items-center text-white shadow rounded"
                                    disabled={loading}
                                    type="button" onClick={handleSubmit}><span
                                className="me-2">Register</span> {loading && <Loader width="25px" height="25px"/>}
                            </button>
                        </div>
                        <div className="text-dark">
                            Have an Account?{' '}
                            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

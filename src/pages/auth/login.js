import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {MailOutlined} from "@ant-design/icons";
import {login} from "../../store/actions/login";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';


const Login = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo, loading, error} = loginInfo
    const [message, setMessage] = useState(null)
    const history = useHistory()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sendingData, setSendingData] = useState(false)
    const dispatch = useDispatch()
    const intended = history.location.state
    useEffect(() => {
        if (userInfo && redirect && !intended) {
            history.push(redirect)
        } else if (userInfo && intended) {
            history.push(intended.from)
        }


    }, [userInfo, history, redirect])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty(email)) {
            setMessage("Email is required")
        } else if (!isEmail(email)) {
            setMessage("Invalid Email Address")
        } else if (isEmpty(password)) {
            setMessage("Password is required")
        } else {
            dispatch(login(email, password))
        }


    }
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight: '65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Login</h4>
                    {message && <Message variant="danger" children={message}/>}
                    {error && <Message variant="danger" children={error}/>}
                    <form className='mt-3'>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email"
                                   aria-describedby="emailHelp"
                                   onChange={(event => setEmail(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                   onChange={(event => setPassword(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn d-blue-bg d-flex align-items-center text-white shadow rounded" disabled={loading}
                                    type="button" onClick={handleSubmit}><MailOutlined className="me-2"/> <span
                                className="me-2">Login with
                                Email/Password</span> {loading && <Loader width="25px" height="25px"/>}
                            </button>
                        </div>
                        <div className="text-dark">

                            <Link to={redirect?`/register?redirect=${redirect}`:'/register'}>New User ?{' '}Register</Link>
                        </div>
                        <div className="mt-3" style={{color: 'red'}}>
                            <Link to="/resetPassword">Forgot Password ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

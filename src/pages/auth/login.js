import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {MailOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";
import {login} from "../../store/actions/login";

const Login = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo, loading, error} = loginInfo
    const history = useHistory()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sendingData, setSendingData] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [userInfo, history, redirect])

    const loginRedirect = (res) => {
        let intended = history.location.state
        if (intended) {
            history.replace(intended.from)
        } else {
            if (res.role === 'admin') {
                history.replace('/')
            } else {
                history.replace('/')
            }
        }
    }
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
        dispatch(login(email, password))

    }
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight: '65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Login</h4>
                    {error && <Message variant="danger" children={error}/>}
                    <form className='mt-3'>
                        <h1>Login</h1>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   onChange={(event => setEmail(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   onChange={(event => setPassword(event.target.value))}/>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn d-blue-bg d-flex align-items-center text-white shadow rounded"
                                    type="button" onClick={handleSubmit}><MailOutlined className="me-2" disabled={loading}/> <span
                                className="me-2">Login with
                                Email/Password</span> {loading && <Loader width="25px" height="25px"/>}
                            </button>
                        </div>
                        {/*<button type="button"  onClick={handleGoogleLogin}  className="mt-3 btn btn-danger d-flex align-items-center text-white shadow rounded">*/}
                        {/*    {prop.islogin ? <GoogleOutlined className="me-2"/> : ''} Login With Google*/}
                        {/*</button>*/}
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

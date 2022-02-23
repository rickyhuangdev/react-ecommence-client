import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/login";
import {useHistory, useLocation} from "react-router-dom";
import {Button} from "antd";
import {MailOutlined} from "@ant-design/icons";

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
        dispatch(login(email,password,prop.islogin));
        const { state } = location
        if(!state){
            history.replace('/')
        }else {
            history.replace(state.from)
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
            {/*<button type="submit" className="btn btn-success">Submit</button>*/}
            <Button type="primary" ghost disabled={!email || password.length < 6}>
                {prop.islogin?<MailOutlined />:''}   {prop.loginText}
            </Button>
        </form>
    );
};

export default LoginAndRegisterForm;

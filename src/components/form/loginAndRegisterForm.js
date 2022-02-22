import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/login";
import {app} from "../../utils/firebase";

const LoginAndRegisterForm = (prop) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
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

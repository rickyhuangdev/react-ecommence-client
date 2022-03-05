import React, {useEffect, useState} from 'react';
import UserNav from "../../components/nav/UserNav";
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from 'react-bootstrap'
import {getUserDetail, updateUserProfile} from "../../store/actions/login";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import Message from "../../components/message/Message";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory()
    const loginInfo = useSelector(state => state.login)
    const {userInfo, error} = loginInfo
    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!userInfo.name) {
            dispatch(getUserDetail())
        } else {
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    }, [dispatch, userInfo, history])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty(name)) {
            setMessage("Name is required")
        } else if (isEmpty(email)) {
            setMessage("Email is required")
        } else if (!isEmail(email)) {
            setMessage("Invalid Email Address")
        } else if (password !== confirmPassword) {
            setMessage("Password do not match")
        } else {
            dispatch(updateUserProfile({id: userInfo._id, name, email, password}))
        }


    }
    return (
        <div className="container py-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 miliods">
                    <UserNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>My Profile</h4>
                                {message && <Message variant="danger" children={message}/>}
                                {error && <Message variant="danger" children={error}/>}
                                {success && <Message variant="success" children="Profile Updated"/>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={name}
                                                      onChange={(event) => setName(event.target.value)}/>
                                    </Form.Group>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" value={email}
                                               aria-describedby="emailHelp"
                                               onChange={(event => setEmail(event.target.value))}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" value={password} autoComplete="false"
                                               onChange={(event => setPassword(event.target.value))}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirm_password" autoComplete="false"
                                               onChange={(event => setConfirmPassword(event.target.value))}/>
                                    </div>
                                    <Button className="d-blue-bg" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

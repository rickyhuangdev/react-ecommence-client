import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetail} from "../../../store/actions/profile";
import {Button, Col, Form, Row} from "react-bootstrap";
import Loader from "../../../components/loader/Loader";
import Message from "../../../components/message/Message";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import {updateUser} from "../../../store/actions/login";

const UserEdit = () => {
    const params = useParams()
    const user_id = params.id
    const userDetail = useSelector(state => state.userDetail)
    const {loading, error, user} = userDetail
    const history = useHistory()
    const dispatch = useDispatch()
    const [state, setState] = useState(1)
    const [admin, setAdmin] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(null)
    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile
    useEffect(() => {

        if (!user || user._id !== user_id) {
            dispatch(getUserDetail(user_id))
        } else {
            setAdmin(user.isAdmin)
            setState(user.state)
            setName(user.name)
            setEmail(user.email)
        }
    }, [user, dispatch])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty(name)) {
            setMessage("Name is required")
        } else if (isEmpty(email)) {
            setMessage("Email is required")
        } else if (!isEmail(email)) {
            setMessage("Invalid Email Address")
        } else {
            dispatch(updateUser({id: user_id, name, email, state, admin}))
        }


    }

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container p-5">
                        <div className="row gy-5 g-xl-8">
                            <div className="col">
                                <h5>編輯用戶</h5>
                                {message && <Message variant="danger" children={message}/>}
                                {error && <Message variant="danger" children={error}/>}
                                {success && <Message variant="success" children="Profile Updated"/>}
                                {loading ? <Loader/> : error ? <Message children={error} variant="danger"></Message> : (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>用戶名</Form.Label>
                                            <Form.Control type="text" placeholder="Enter email" value={name}
                                                          onChange={(event) => setName(event.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={email}
                                                          onChange={(event) => setEmail(event.target.value)}/>
                                        </Form.Group>
                                        <fieldset>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label as="legend" column sm={2}>
                                                    帳號狀態
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="啟用"
                                                        name="state"
                                                        id="formHorizontalRadios1"
                                                        value={1}
                                                        checked={state == 1}
                                                        onChange={(event) => setState(event.target.value)}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="停用"
                                                        name="state"
                                                        id="formHorizontalRadios2"
                                                        value={0}
                                                        checked={state == 0}
                                                        onChange={(event) => setState(event.target.value)}

                                                    />

                                                </Col>
                                            </Form.Group>
                                        </fieldset>
                                        <fieldset>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label as="legend" column sm={2}>
                                                    is Admin
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="是"
                                                        name="isAdmin"
                                                        id="formHorizontalRadios1"
                                                        value={true}
                                                        checked={admin === true}
                                                        onChange={(event) => setAdmin(event.target.value)}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="否"
                                                        name="isAdmin"
                                                        id="formHorizontalRadios2"
                                                        value={false}
                                                        checked={admin === false}
                                                        onChange={(event) => setAdmin(event.target.value)}

                                                    />

                                                </Col>
                                            </Form.Group>
                                        </fieldset>
                                        <Button className="d-blue-bg" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEdit;

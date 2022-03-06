import React, {useState} from 'react';
import UserNav from "../../components/nav/UserNav";
// import {auth} from "../../utils/firebase";
import {getAuth, signOut, updatePassword} from "firebase/auth";
import {toast} from "react-toastify";
import {logout} from "../../store/actions/login";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Password = () => {
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const passwordChangeHandler = async (e) => {
        e.preventDefault()
        if (!password) {
            toast.info("Please enter the password")
            return
        }
        if (password.length < 6) {
            toast.info("Password should be at least 6 characters")
            setPassword('')
            return
        }

        const auth = getAuth();
        const user = auth.currentUser;
        await updatePassword(user, password).then(() => {
           toast("Password Update successful")
        }).catch((error) => {
            const errorCode = error.code;
            let message = null
            switch (errorCode) {
                case 'auth/weak-password':
                    message = "Password should be at least 6 characters"
                    break;
                case 'auth/requires-recent-login':
                    message = "Sorry,this some problem so you have to login again"
                    signOut(auth).then(async () => {
                        await dispatch(logout())
                        history.push('/login')
                    }).catch((error) => {
                        // An error happened.
                    });
                    break;
                default:
                    message = null;
            }
            toast.error(`${message}`);
        });


    }
    return (
        <div className="container py-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-12 col-md-4">
                    <UserNav/>
                </div>
                <div className="col-12 col-md-8 mt-5 mt-md-0">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Update your password</h4>
                                <form className="mt-4" onSubmit={passwordChangeHandler}>
                                    <div className="form-group">
                                        <label htmlFor="password">Current Password</label>
                                        <input type="password" className="form-control" id="password"
                                               onChange={(e) => setPassword(e.target.value)}
                                               aria-describedby="password" placeholder="Enter current password"
                                               value={password}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;

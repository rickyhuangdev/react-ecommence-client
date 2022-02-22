import {toast} from "react-toastify";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setTokenInfo} from "../../utils/storage";
import {app}from '../../utils/firebase'

export const login = (email, password, login = false) => {
    return async dispatch => {
        const auth = getAuth();
        if (!login) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setTokenInfo(userCredential._tokenResponse.refreshToken)
                    toast.success('Register Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(userCredential)
                    // ...
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    let message = null
                    switch (errorCode) {
                        case 'auth/weak-password':
                            message = "Password should be at least 6 characters"
                            break;
                        case 'auth/email-already-in-use':
                            message = "This email address is already being used"
                            break;
                        default:
                            message = null;
                    }

                    toast.error(`${message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setTokenInfo(userCredential._tokenResponse.refreshToken)
                    toast.success('Login Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let message = null
                    switch (errorCode) {
                        case 'auth/wrong-password':
                            message = "Invalid username or password, Please try again"
                            break;
                        case 'auth/user-not-found':
                            message = "This email address does not exist"
                            break;
                        default:
                            message = null;
                    }
                    toast.error(`${message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    }

}

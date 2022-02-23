import {toast} from "react-toastify";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";


export const login = (email, password, login = false) => {

    return async dispatch => {
        let auth = getAuth();
        let tokenInfo = null
        if (!login) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                     tokenInfo = userCredential._tokenResponse.refreshToken
                 //   setTokenInfo(tokenInfo)
                    dispatch(saveToken(tokenInfo))
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
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const idTokenResult = await user.getIdTokenResult()
                    dispatch(saveUserInfo({
                        email: user.email,
                        token: idTokenResult.token
                    }))
                    toast.success('Login Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

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

export const saveToken = tokenInfo => {
    return {
        type: 'login/token', payload: tokenInfo
    }
}

export const saveUserInfo = userInfo => {
    return {
        type: 'login/info', payload: userInfo
    }
}
export const logout = async ()  => {
    let auth = getAuth();
 const result =  await auth.signOut()
    console.log(result)
}

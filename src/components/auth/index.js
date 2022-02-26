// import React from 'react';
// import {Redirect, Route} from "react-router-dom";
// import {hasToken} from "../../utils/storage";
// import {useSelector} from "react-redux";
//
// const AuthRoute = ({component: Component, ...rest}) => {
//     const profile = useSelector(state => state.profile.user)
//     return (<Route {...rest}
//                    render={() => {
//                        if (hasToken()) {
//                            return <Component></Component>
//                        } else {
//                            return <Redirect to="/login"></Redirect>
//                        }
//                    }}
//         >
//         </Route>
//     );
// };
//
// export default AuthRoute;

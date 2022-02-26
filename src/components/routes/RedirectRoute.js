import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const RedirectRoute = ({message,location}) => {
    const [count, setCount] = useState(5)
    let history = useHistory()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        },1000)
        count === 0 && history.push(location)
        return () => clearInterval(interval)
    }, [count])
    return (
        <div className="container p-5  align-items-center d-flex justify-content-center flex-column" style={{height:"60vh"}}>
            <div>
                <h4>{message}</h4>
            </div>
            <div>
                <p>Redirect you in <span className="text-danger font-weight-bold">{count}</span> seconds</p>
            </div>
        </div>
    );
};

export default RedirectRoute;

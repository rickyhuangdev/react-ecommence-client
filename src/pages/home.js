import React, {useEffect} from 'react';
import {createOrUpdateUser} from "../store/actions/login";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(createOrUpdateUser())
    })
    return (
        <div>
            home
        </div>
    );
};

export default Home;

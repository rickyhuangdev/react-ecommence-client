import React from 'react';
import UserNav from "../../components/nav/UserNav";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
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
                                <h4>Dashboard</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

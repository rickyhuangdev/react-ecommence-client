import React from 'react';
import UserNav from "../../components/nav/UserNav";

const Payment = () => {
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
                                <h4>Payment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

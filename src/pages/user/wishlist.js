import React from 'react';
import UserNav from "../../components/nav/UserNav";

const Wishlist = () => {
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
                                <h4>Wishlist</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;

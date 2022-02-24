import React from 'react';
import UserNav from "../../components/nav/UserNav";
import AdminNav from "../../components/nav/AdminNav";

const AdminDashboard = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 miliods">
                   <AdminNav />
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Admin Profile</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

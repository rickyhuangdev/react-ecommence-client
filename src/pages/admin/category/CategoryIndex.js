import React from 'react';
import AdminNav from "../../../components/nav/AdminNav";

const CategoryIndex = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav />
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Category List</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryIndex;

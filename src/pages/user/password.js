import React from 'react';
import UserNav from "../../components/nav/UserNav";

const Password = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 miliods">
                    <UserNav />
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Update your password</h4>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share
                                            your email with anyone else.</small>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;

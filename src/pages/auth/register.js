import React, {useState} from 'react';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {

    }
    const registerForm = () => (

            <form className='mt-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

    )

    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center" style={{minHeight:'65vh'}}>
                <div className="col col-md-6 offset-md-3 mx-auto">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
    };

    export default Register;

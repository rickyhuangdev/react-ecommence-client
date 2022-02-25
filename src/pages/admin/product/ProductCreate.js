import React from 'react';
import AdminNav from "../../../components/nav/AdminNav";

const ProductCreate = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Create Product</h4>
                                {/*<form className="mt-4" onSubmit={editProductHandler}>*/}
                                {/*    <div className="form-group">*/}
                                {/*        <label htmlFor="Product_name">Product Name</label>*/}
                                {/*        <input type="text" className="form-control" id="Product_name"*/}
                                {/*               onChange={(e) => setName(e.target.value)} value={name}*/}
                                {/*               aria-describedby="Product_name" placeholder="Enter Product name"/>*/}
                                {/*    </div>*/}
                                {/*    <div className="form-group">*/}
                                {/*        <label htmlFor="Product_name">Product State</label>*/}
                                {/*        <br/>*/}
                                {/*        <div className="form-check form-check-inline">*/}
                                {/*            <input className="form-check-input" type="radio" name="state"*/}
                                {/*                   checked={state === 1}*/}
                                {/*                   onChange={(e) => setState(1)}*/}
                                {/*                   id="inlineRadio1" value="1"/>*/}
                                {/*            <label className="form-check-label"*/}
                                {/*                   htmlFor="inlineRadio1">processing</label>*/}
                                {/*        </div>*/}
                                {/*        <div className="form-check form-check-inline">*/}
                                {/*            <input className="form-check-input" type="radio" name="state"*/}
                                {/*                   checked={state === 0}*/}
                                {/*                   onChange={(e) => setState(0)}*/}
                                {/*                   id="inlineRadio2" value="0"/>*/}
                                {/*            <label className="form-check-label" htmlFor="inlineRadio2">pending</label>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <button type="submit" className="btn btn-primary">Submit</button>*/}
                                {/*</form>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;

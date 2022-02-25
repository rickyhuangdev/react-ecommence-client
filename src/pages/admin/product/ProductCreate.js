import React, {useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {createProductApi} from "../../../api/Product";

const ProductCreate = () => {
    const [name, setName] = useState('')
    const creatProductHandler = async (e) => {
        e.preventDefault()
        if (!name) {
            toast.info("Please enter the Product name")
            return
        }
        if (name.length < 2) {
            toast.info("Product name at least 3 characters")
            return
        }
        try {
            const res = await createProductApi({name})
            if (res) {
                setName('')
                toast.success(`Create ${name} successfully`)

            }

        } catch (e) {
            toast.success(`Create ${name} failed`)
        }
    }
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
                                <form className="mt-4" onSubmit={creatProductHandler}>
                                    <div className="form-group">
                                        <label htmlFor="Product_name">Product Name</label>
                                        <input type="text" className="form-control" id="Product_name"
                                               onChange={(e) => setName(e.target.value)} value={name}
                                               aria-describedby="Product_name" placeholder="Enter Product name"/>
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

export default ProductCreate;

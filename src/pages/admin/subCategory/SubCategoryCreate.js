import React, {useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {createCategoryApi} from "../../../api/category";

const SubCategoryCreate = () => {
    const [name, setName] = useState('')
    const creatCategoryHandler = async (e) => {
        e.preventDefault()
        if (!name) {
            toast.info("Please enter the category name")
            return
        }
        if (name.length < 2) {
            toast.info("Category name at least 3 characters")
            return
        }
        try {
            const res = await createCategoryApi({name})
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
                                <h4>Create Category</h4>
                                <form className="mt-4" onSubmit={creatCategoryHandler}>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Category Name</label>
                                        <input type="text" className="form-control" id="category_name"
                                               onChange={(e) => setName(e.target.value)} value={name}
                                               aria-describedby="category_name" placeholder="Enter Category name"/>
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

export default SubCategoryCreate;

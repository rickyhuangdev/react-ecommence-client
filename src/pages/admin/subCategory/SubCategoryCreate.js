import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {createSubCategoryApi} from "../../../api/subCategory";
import {getCategoryApi} from "../../../api/category";

const SubCategoryCreate = () => {
    const [name, setName] = useState('')
    const [parent, setParent] = useState('')
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetchCategories()
    }, [])
    const fetchCategories = () => {
        getCategoryApi().then(res => {
            setCategory(res)
        })
    }
    const creatSubCategoryHandler = async (e) => {
        e.preventDefault()
        if (!name || !parent) {
            toast.info("Please enter the category name and Select the parent category")
            return
        }
        if (name.length < 2) {
            toast.info("subCategory name at least 3 characters")
            return
        }
        try {
            const res = await createSubCategoryApi({name, parent})
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
                                <h4>Create SubCategory</h4>
                                <form className="mt-4" onSubmit={creatSubCategoryHandler}>
                                    <div className="form-group">
                                        <label htmlFor="category_name">subCategory Name</label>
                                        <input type="text" className="form-control" id="category_name"
                                               onChange={(e) => setName(e.target.value)} value={name}
                                               aria-describedby="category_name" placeholder="Enter Category name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Parent</label>
                                        <select className="custom-select" required onChange={(e) => {
                                            setParent((e.target.value))
                                        }}>
                                            {
                                                category.length > 0 && category.map(item => (
                                                    <option value={item._id} key={item._id}>{item.name}</option>
                                                ))
                                            }

                                        </select>
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

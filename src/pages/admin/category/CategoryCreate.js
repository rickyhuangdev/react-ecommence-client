import React, {useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {createCategoryApi} from "../../../api/category";
import FileUpload from "../../../components/form/FileUpload";

const CategoryCreate = () => {
    const initialState ={
        name:'',
        image:'',
        images:[]
    }
    const [name, setName] = useState('')
    const [values, setValues] = useState(initialState)
    const creatCategoryHandler = async (e) => {
        setValues({...values,image:values.images[0].url})
        e.preventDefault()
        if (!values.name) {
            toast.info("Please enter the category name")
            return
        }
        if (values.name.length < 2) {
            toast.info("Category name at least 3 characters")
            return
        }
        try {
            const res = await createCategoryApi({values})
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
                                <form className="mt-4">
                                    <div className="form-group">
                                        <label htmlFor="category_name">Category Name</label>
                                        <input type="text" className="form-control" id="category_name"
                                               onChange={(e) => setValues({...values,name:e.target.value})} value={values.name}
                                               aria-describedby="category_name" placeholder="Enter Category name"/>
                                    </div>
                                    <FileUpload setValues={setValues} values={values} />
                                    <button type="button" className="btn btn-primary" onClick={creatCategoryHandler}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCreate;

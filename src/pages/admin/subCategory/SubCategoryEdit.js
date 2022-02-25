import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {readCategoryApi, updateCategoryApi} from "../../../api/category";
import AdminNav from "../../../components/nav/AdminNav";
import {useHistory} from "react-router-dom";

const SubCategoryEdit = ({match}) => {
    const {slug} = match.params
    const [name, setName] = useState('')
    const [state, setState] = useState(1)
    const history = useHistory()
    useEffect(() => {
        getCategory()
    }, [])
    const getCategory = () => {
        readCategoryApi(slug).then(res => {
            if (res) {
                setName(res.name)
                setState(res.state)
            }
        }).then(error => {

        })
    }
    const editCategoryHandler = async (e) => {
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
            const res = await updateCategoryApi({name, state, slug})
            if (res) {
                toast.success(`Update ${name} successfully`)
                history.replace('/admin/category')
            }

        } catch (e) {
            toast.success(`Update ${name} failed`)
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
                                <form className="mt-4" onSubmit={editCategoryHandler}>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Category Name</label>
                                        <input type="text" className="form-control" id="category_name"
                                               onChange={(e) => setName(e.target.value)} value={name}
                                               aria-describedby="category_name" placeholder="Enter Category name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Category State</label>
                                        <br/>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="state"
                                                   checked={state === 1}
                                                   onChange={(e) => setState(1)}
                                                   id="inlineRadio1" value="1"/>
                                            <label className="form-check-label"
                                                   htmlFor="inlineRadio1">processing</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="state"
                                                   checked={state === 0}
                                                   onChange={(e) => setState(0)}
                                                   id="inlineRadio2" value="0"/>
                                            <label className="form-check-label" htmlFor="inlineRadio2">pending</label>
                                        </div>
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

export default SubCategoryEdit;

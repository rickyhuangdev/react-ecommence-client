import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {getCategoryApi} from "../../../api/category";
import AdminNav from "../../../components/nav/AdminNav";
import {useHistory} from "react-router-dom";
import {readSubCategoryApi, updateSubCategoryApi} from "../../../api/subCategory";

const SubCategoryEdit = ({match}) => {
    const {slug} = match.params
    const [name, setName] = useState('')
    const [state, setState] = useState(1)
    const [parent_id, setParentId] = useState('')
    const [category, setCategory] = useState([]);
    const [parent, setParent] = useState('')
    const history = useHistory()
    useEffect(() => {
        getSubCategory()
        fetchCategories()
    }, [])
    const fetchCategories = () => {
        getCategoryApi().then(res => {
            setParent(res)
        })
    }
    const getSubCategory = () => {
        readSubCategoryApi(slug).then(res => {
            if (res) {
                setName(res.name)
                setState(res.state)
                setParentId(res.parent)
            }
        }).then(error => {

        })
    }
    const editSubCategoryHandler = async (e) => {
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
            const res = await updateSubCategoryApi({name, state, slug, parent: parent_id})
            if (res) {
                toast.success(`Update ${name} successfully`)
                history.replace('/admin/subCategory')
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
                                <h4>Edit subCategory</h4>
                                <form className="mt-4" onSubmit={editSubCategoryHandler}>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Category Name</label>
                                        <input type="text" className="form-control" id="category_name"
                                               onChange={(e) => setName(e.target.value)} value={name}
                                               aria-describedby="category_name" placeholder="Enter Category name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category_name">Parent</label>
                                        <select className="custom-select" value={parent_id} key={parent_id} required
                                                onChange={(e) => {
                                                    setParentId((e.target.value))
                                                }}>
                                            {
                                                parent.length > 0 && parent.map(item => (
                                                    <option value={item._id} key={item._id}>{item.name}</option>
                                                ))
                                            }

                                        </select>
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

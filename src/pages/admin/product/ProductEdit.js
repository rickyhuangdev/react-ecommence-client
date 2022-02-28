import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {createProductApi, readProductApi} from "../../../api/product";
import {toast} from "react-toastify";
import ProductCreateForm from "../../../components/form/ProductCreateForm";
import {getCategoryApi, getCategorySubApi} from "../../../api/category";
import {useParams} from "react-router-dom";
import ProductUpdateForm from "../../../components/form/ProductUpdateForm";

const initialState = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    subs: [],
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: '',
    brand: ''
}
const ProductEdit = (props) => {
    let { slug } = useParams()
    const [values, setValues] = useState(initialState)
    const [subOptions, setSubOptions] = useState([])
    const [showSub, setShowSub] = useState(false)
    useEffect(() => {
        fetchCategories()
        fetchProduct()
    }, [])
    const fetchCategories = () => {
        getCategoryApi().then(res => {
            console.log(res)
            setValues({...values,categories:res})
        })
    }
    const fetchProduct = () => {
        readProductApi(slug).then(res => {
            setValues({...values,...res})
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const re = await createProductApi(values)
            if(re){
                toast(`Create Product successfully`)
            }
        }catch (e){
            console.log(e)
        }


    }
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const handleCategoryChange = (e) => {
        e.preventDefault()
        const cat_id = e.target.value
        setValues({...values,subs:[],category:cat_id})
        getCategorySubApi(cat_id).then(res=>{
            setSubOptions(res)
        })
        setShowSub(true)
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
                                <h4>Edit Product</h4>
                                {JSON.stringify(values)}
                                <ProductUpdateForm handleChange={handleChange} handleSubmit={handleSubmit}
                                                   setValues={setValues}
                                                   values={values} handleCategoryChange={handleCategoryChange}
                                                   subOptions={subOptions}
                                                   showSub={showSub}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;

import React, {useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {createProductApi} from "../../../api/product";
import {toast} from "react-toastify";
import ProductCreateAndUpdateForm from "../../../components/form/ProductCreateAndUpdateForm";

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
const ProductCreate = () => {
    const [values, setValues] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // .then(res=>{
        //     console.log(res)
        // }).catch(e=>{
        //     console.log(e.response.status)
        //     if(e.response.status ===400){
        //         toast.error(e.response.data)
        //     }
        // })
        try{
          const re = await createProductApi(values)
            console.log(re)
        }catch (e){
            console.log(e)
        }


    }
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
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
                             <ProductCreateAndUpdateForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;

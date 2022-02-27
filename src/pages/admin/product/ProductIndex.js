import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {getProductsApi} from "../../../api/product";
import AdminProductCard from "../../../components/cards/AdminProductCard";

const ProductIndex = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        getProductsApi().then(re => {
            setProducts(re)
        })
    }
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container py-5">
                        <h4>Product List</h4>
                        <div className="row pt-3">
                                {products && products.map((item) => (
                                    <div className="col-md-4" key={item._id}>
                                        <AdminProductCard  product={item} />
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductIndex;

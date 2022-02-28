import React, {useEffect, useState} from 'react';
import {fetchProductsApi} from "../../api/product";
import ProductSlider from "./productSlider";

const ProductList = () => {
    useEffect(() => {
        getProducts()
    }, [])
    const [products, setProducts] = useState([])
    const getProducts = () => {
        fetchProductsApi('createdAt','desc',6).then(re => {
            setProducts(re)
        })
    }
    return (
        <div className="container-fluid pb-2">
                <ProductSlider products={products} title="New Arrivals" className="mb-4"/>
        </div>
    );
};

export default ProductList;

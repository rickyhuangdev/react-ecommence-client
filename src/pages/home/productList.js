import React, {useEffect, useState} from 'react';
import {getProductsApi} from "../../api/product";
import ProductSlider from "./productSlider";

const ProductList = () => {
    useEffect(() => {
        getProducts()
    }, [])
    const [products, setProducts] = useState([])
    const getProducts = () => {
        getProductsApi().then(re => {
            setProducts(re)
        })
    }
    return (
        <div className="container-fluid pb-2">
                <ProductSlider products={products} className="mb-4"/>
        </div>
    );
};

export default ProductList;

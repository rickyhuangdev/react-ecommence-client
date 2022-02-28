import React, {useEffect, useState} from 'react';
import {fetchProductsApi} from "../../api/product";
import ProductSlider from "./productSlider";

const NewArrivals = () => {
    useEffect(() => {
        getProducts()
    }, [])
    const [products, setProducts] = useState([])
    const getProducts = () => {
        fetchProductsApi('sold','desc',6).then(re => {
            setProducts(re)
        })
    }
    return (
        <div className="container-fluid pb-2">
                <ProductSlider products={products} title="Best Seller" className="mb-4"/>
        </div>
    );
};

export default NewArrivals;

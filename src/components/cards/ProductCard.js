import React from 'react';
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
            <div className="card d-flex justify-content-center align-items-center p-2 shadow-none" style={{minHeight:"400px"}}>
                <img className="card-img-top" src={product.images[0].url} alt={product.title} style={{width:"210px",height:"210px"}} />
                    <div className="card-body d-flex justify-content-center align-items-center flex-column w-100">
                        <div className="card-text text-center pb-3 h6 w-100 font-weight-bold" style={{height:"30px"}}>
                            <Link to={`/product/${product.slug}`}>{product.title}</Link>
                        </div>
                        <button className="btn btn-info d-flex w-100 mt-4 justify-content-center align-items-center shadow-none" type="button"><ShoppingCartOutlined style={{fontSize:"18px"}}className="mr-2" />ADD TO CART</button>
                    </div>
            </div>
    );
};

export default ProductCard;

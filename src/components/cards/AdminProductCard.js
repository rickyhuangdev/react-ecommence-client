import React from 'react';
import defaultImage from '../../assets/images/default_product.png'
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
const AdminProductCard = ({product}) => {
    const {title,description,images} = product
    return (
        <>
            <div className="card">
                <img className="card-img-top m-1" src={images && images.length ? images[0].url:defaultImage} alt="Card image cap" style={{height:"180px",objectFit:"cover"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description && description.substring(0,10)}...</p>
                </div>
                <div className="card-footer d-flex">
                    <div className="mr-2">{<EditOutlined style={{fontSize:"18px"}} className="text-info" />}</div>
                    <div>{<DeleteOutlined  style={{fontSize:"18px"}} className="text-warning"/>}</div>
                </div>
            </div>
        </>
    );
};

export default AdminProductCard;

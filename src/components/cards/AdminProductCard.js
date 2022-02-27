import React from 'react';
import defaultImage from '../../assets/images/default_product.png'
import {DeleteOutlined, EditOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {Popconfirm} from "antd";
import {toast} from "react-toastify";
const AdminProductCard = ({product,removeProduct}) => {
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
                    <div>
                        <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />} onConfirm={()=>removeProduct(product._id)}>
                            {<DeleteOutlined  style={{fontSize:"18px"}} className="text-warning"/>}
                        </Popconfirm>
                        </div>
                </div>
            </div>
        </>
    );
};

export default AdminProductCard;

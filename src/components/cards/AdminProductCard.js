import React from 'react';

const AdminProductCard = ({product}) => {
    const {title,description,images} = product
    return (
        <>
            <div className="card">
                <img className="card-img-top m-1" src={images && images.length ? images[0].url:''} alt="Card image cap" style={{height:"150px",objectFit:"cover"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </>
    );
};

export default AdminProductCard;

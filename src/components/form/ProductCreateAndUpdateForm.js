import React from 'react';

const ProductCreateAndUpdateForm = ({handleSubmit,handleChange,values}) => {
    const {
        title,
        description,
        price,
        category,
        categories,
        subs,
        shipping,
        quantity,
        images,
        color,
        colors,
        brand,
        brands
    } = values
    return (
        <form className="mt-5" autoComplete="false" onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Product
                    Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3" name="title"
                           value={title} onChange={handleChange}
                           placeholder="product name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3"
                       className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                                            <textarea className="form-control" id="inputPassword3" rows="3"
                                                      value={description} name="description" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Product
                    Price</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3" name="price"
                           value={price} onChange={handleChange}
                           placeholder="price"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputEmail3"
                       className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3" name="quantity"
                           value={quantity} onChange={handleChange}
                           placeholder="quantity"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Color</label>
                <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1" name="color" value={color}
                            onChange={handleChange}>
                        {colors.map(item =>
                            <option key={item} value={item}>{item}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Shipping</label>
                <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1" value={1} key={1}
                            name="shipping" onChange={handleChange}>
                        <option>Please the Shipping</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1" value={brand} onChange={handleChange} name="brand">
                        <option>Please the Brands</option>
                        {brands.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default ProductCreateAndUpdateForm;

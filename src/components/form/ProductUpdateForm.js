import React from 'react';
import { Select } from 'antd';
import FileUpload from "./FileUpload";

const ProductUpdateForm = ({handleSubmit,handleChange,values,handleCategoryChange,showSub,subOptions,setValues,categories,arrayOfSubIds,setArrayOfSubIds,selectedCategory}) => {
    const { Option } = Select;
    const {
        title,
        description,
        price,
        category,
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
                    <select className="form-control" id="exampleFormControlSelect1" value={shipping ==='Yes'?'Yes':'No'}
                            name="shipping" onChange={handleChange}>
                        <option>Please the Shipping</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Category</label>
                <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1"  onChange={handleCategoryChange} name="category" value={selectedCategory?selectedCategory:category._id}>
                        <option>Please Select the Category</option>
                        {categories.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
                    </select>
                </div>
            </div>
            {subOptions && subOptions.length >0 ?
                (
                    <div className="form-group row">
                        <label htmlFor="exampleFormControlSelect1"
                               className="col-sm-2 col-form-label">Sub Category</label>
                        <div className="col-sm-10">
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                value={arrayOfSubIds}
                                onChange={(value)=>setArrayOfSubIds(value)}
                            >
                                {subOptions.map(item=>(
                                <Option value={item._id} key={item._id}>{item.name}</Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                ):(
                    ''
                )

            }

            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1" value={brand} onChange={handleChange} name="brand">
                        <option>Please Select the Brands</option>
                        {brands.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
            </div>

               <FileUpload values={values} setValues={setValues} />

            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default ProductUpdateForm;

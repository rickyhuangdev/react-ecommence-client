import React from 'react';
import FileResizer from "react-image-file-resizer";
import {deleteImageApi, uploadImageApi} from "../../api/upload";
import {Badge, Card} from "antd";

const FileUpload = ({values, setValues}) => {
    const fileUploadAndResize = (e) => {
        let files = e.target.files
        let allUploadFiles = values.images
        if (files) {
            for (let i = 0; i < files.length; i++) {
                FileResizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {
                        uploadImageApi({image: uri}).then(res => {
                            if (res) {
                                allUploadFiles.push(res)
                                setValues({...values, images: allUploadFiles})
                            }
                        })

                    },
                    "base64")
            }
        }
    }
    const handleImageRemove = (image_id) => {
        deleteImageApi({public_id: image_id}).then(res => {
            if (res) {
                const {images} = values
                let filterImageArr = images.filter(item => {
                    return item.public_id !== image_id
                })
                setValues({...values,images:filterImageArr})
            }
        })
    }
    return (
        <>
            <div className="form-group row">
                <label htmlFor="exampleFormControlSelect1"
                       className="col-sm-2 col-form-label">Upload Images</label>
                <div className="col-sm-10">
                    <div className="form-group">
                        <label htmlFor="imageupload" className="btn btn-secondary">Upload Images
                            <input type="file"
                                                                                                        className="form-control-file"
                                                                                                        id="imageupload"
                                                                                                        accept="image/*"
                                                                                                        multiple hidden
                                                                                                        onChange={fileUploadAndResize}/></label>
                    </div>
                </div>
        </div>
    <div className="form-group row">
        <label htmlFor="exampleFormControlSelect1"
               className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
            <div className="form-group">
                <div className="row">
                    {values.images && values.images.length >0 &&(
                        values.images.map((image)=> (
                            <div className="col-3" key={image.public_id}>
                                <Badge count="x" key={image.public_id} onClick={() => {
                                    handleImageRemove(image.public_id)
                                }}>
                                    <Card
                                        hoverable
                                        style={{width: 150, height: 150}}
                                        cover={<img alt={image.url} src={image.url}/>}/>
                                </Badge>
                            </div>
                        ))

                    )}
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default FileUpload;

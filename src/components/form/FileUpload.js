import React from 'react';
import FileResizer from "react-image-file-resizer";
import {uploadImageApi} from "../../api/upload";
import {Card} from "antd";

const FileUpload = ({values, setValues}) => {
    const fileUploadAndResize =  (e) => {
        let files = e.target.files
        let allUploadFiles = values.images
        if (files) {
            for (let i = 0; i < files.length; i++) {
                FileResizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {
                       uploadImageApi({image: uri}).then(res=>{
                            if (res) {
                                console.log(res)
                                allUploadFiles.push(res)
                                setValues({...values, images: allUploadFiles})
                            }
                        })

                    },
                    "base64")
            }
        }
    }
    return (
        <>
        <div className="form-group row">
            <label htmlFor="exampleFormControlSelect1"
                   className="col-sm-2 col-form-label">Upload Images</label>
            <div className="col-sm-10">
        <div className="form-group">
            <label htmlFor="imageupload" className="btn btn-secondary">Upload Images  <input type="file" className="form-control-file" id="imageupload" accept="image/*" multiple hidden onChange={fileUploadAndResize} /></label>
        </div>
            </div>
        </div>
    <div className="form-group row">
        <label htmlFor="exampleFormControlSelect1"
               className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
            <div className="form-group">
                <div className="row">
                    {values.images &&(
                        values.images.map((image)=>(
                            <div className="col-3">
                                <Card
                                    hoverable
                                    style={{ width: 150,height:150 }}
                                    cover={<img alt={image.url} src={image.url} />} />
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

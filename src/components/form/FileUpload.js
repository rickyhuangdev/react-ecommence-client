import React from 'react';
import FileResizer from "react-image-file-resizer";

const FileUpload = () => {
    const fileUploadAndResize = (e)=> {
        let files = e.target.files
        if (files) {
            for (let i = 0; i < files.length; i++) {
                FileResizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {
                        console.log(uri);
                    },
                    "base64")
            }
        }
    }
    return (
        <div className="form-group">
            <label htmlFor="imageupload" className="btn btn-secondary">Upload Images  <input type="file" className="form-control-file" id="imageupload" accept="image/*" multiple hidden onChange={fileUploadAndResize} /></label>
        </div>
    );
};

export default FileUpload;

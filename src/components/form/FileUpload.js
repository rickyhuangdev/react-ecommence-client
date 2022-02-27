import React from 'react';

const FileUpload = () => {
    const fileUploadAndResize = (e)=>{
        console.log(e.target.files)
    }
    return (
        <div className="form-group">
            <label htmlFor="imageupload" className="btn btn-secondary">Upload Images  <input type="file" className="form-control-file" id="imageupload" accept="image/*" multiple hidden onChange={fileUploadAndResize} /></label>
        </div>
    );
};

export default FileUpload;

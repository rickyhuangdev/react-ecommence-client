import React from 'react';
import {Spinner} from "react-bootstrap";


const Loader = ({width, height}) => {
    return (
        <Spinner animation='border' role='status'
                 style={{width: width, height: height, margin: 'auto', display: 'inline-block'}}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};
Loader.defaultProps = {
    width: '100px',
    height: '100px'
}
export default Loader;

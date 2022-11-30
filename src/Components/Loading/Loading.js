import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div style={{height: '400px'}} className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="info" />
        </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="info" />
        </div>
        </div>
    );
};

export default Loading;
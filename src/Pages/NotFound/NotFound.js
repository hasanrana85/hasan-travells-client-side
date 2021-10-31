import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt="" />
            <div className="mt-4"><button className="btn btn-outline btn-secondary p-3 fw-bold fs-5">Back to HomePage</button></div>
        </div>
    );
};

export default NotFound;<h2>This is not found page</h2>
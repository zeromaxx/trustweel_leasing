import React from 'react';

function SuccessMessage({ message }) {
    return (
        <div className="alert alert-success" role="alert">
            {message}
        </div>
    );
}

export default SuccessMessage;

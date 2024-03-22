import React from "react";

function SuccessMessage({ message, className }) {
    return (
        <div
            className={className + " alert alert-success text-center"}
            role="alert"
        >
            {message}
        </div>
    );
}

export default SuccessMessage;

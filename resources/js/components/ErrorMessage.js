import React from "react";

function ErrorMessage({ message, className }) {
    return (
        <div className={className + " alert alert-danger text-center"} role="alert">
            {message}
        </div>
    );
}

export default ErrorMessage;

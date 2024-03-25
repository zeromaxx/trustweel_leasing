import React, { useState } from "react";
import HeroImage from "../../../public/img/register-img.jpg";
import { Link } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.success) {
                    setSuccess(data.message);
                    setEmail("");
                    setPassword("");
                    setValidationErrors({});
                } else {
                    setValidationErrors(data.errors);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <section>
            <div className="sign__form">
                <h2 className="mb-5">TrustWeel Leasing</h2>
                <form className="w-100" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className=""
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className=""
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-default">
                        sign up
                    </button>
                    <span className="sign__text">
                        Already have an account?{" "}
                        <Link to="/login">Sign In!</Link>
                    </span>
                </form>
                {success && (
                    <SuccessMessage
                        message={success}
                        className="mt-3 font-size-14 w-100"
                    />
                )}
                {Object.keys(validationErrors).length > 0 && (
                    <div
                        className="alert alert-danger mt-2 w-100 text-center font-size-14"
                        role="alert"
                    >
                        {Object.values(validationErrors).map((error, index) => (
                            <p className="m-0" key={index}>
                                {error}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <img src={HeroImage} className="hero-image" alt="hero-img" />
        </section>
    );
}

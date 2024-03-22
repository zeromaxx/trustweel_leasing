import React, { useState } from "react";
import HeroImage from "../../../public/img/register-img.jpg";
import { Link } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.success) {
                    setSuccess(data.message);
                    setUsername("");
                    setPassword("");
                } else {
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
                            placeholder="Your Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                {success && <SuccessMessage message={success} />}
            </div>
            <img src={HeroImage} className="hero-image" alt="hero-img" />
        </section>
    );
}

import React, { useState, useContext } from "react";
import HeroImage from "../../../public/img/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { AuthContext } from "./AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { logIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("api/login", {
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
                if (data.success) {
                    setEmail("");
                    setPassword("");
                    localStorage.setItem("role", data.role);
                    localStorage.setItem("token", data.token);
                    logIn(data.role);
                    setTimeout(() => {
                        navigate("/");
                    }, 500);
                } else {
                    setError(data.message);
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
                        sign in
                    </button>
                    {error && <ErrorMessage message={error} className="mt-3 font-size-14" />}
                    <span className="sign__text">
                        Don't have an account?{" "}
                        <Link to="/register">Sign Up!</Link>
                    </span>
                </form>
            </div>
            <img src={HeroImage} className="hero-image" alt="hero-img" />
        </section>
    );
}

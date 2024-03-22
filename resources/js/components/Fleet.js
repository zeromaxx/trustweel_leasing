import React, { useState, useEffect } from "react";
import Car from "../../../public/img/1-1.jpg";
import { Link } from "react-router-dom";

export default function Fleet() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("api/cars")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCars(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);
    return (
        <div className="fleet">
            <div className="container">
                <div className="row">
                    {cars.map((car) => (
                        <div key={car.id} className="col-md-4">
                            <div className="car mx-auto my-5">
                                <img
                                    src={Car}
                                    className="card-img-top car-img"
                                    alt="Fiat 500"
                                />
                                <div className="body-card mt-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="card-title">
                                                {car.name}
                                            </h5>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-end">
                                                <span className="year">
                                                    2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="specs mt-2 mb-2">
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="20"
                                                    fill="#189cf4"
                                                >
                                                    <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path>
                                                </svg>
                                                <span className="ms-2 font-size-14">
                                                    4 People
                                                </span>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="20"
                                                    fill="#189cf4"
                                                >
                                                    <path d="M20.54,6.29,19,4.75,17.59,3.34a1,1,0,0,0-1.42,1.42l1,1-.83,2.49a3,3,0,0,0,.73,3.07l2.95,3V19a1,1,0,0,1-2,0V17a3,3,0,0,0-3-3H14V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V16h1a1,1,0,0,1,1,1v2a3,3,0,0,0,6,0V9.83A5,5,0,0,0,20.54,6.29ZM12,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12h8Zm0-9H4V5A1,1,0,0,1,5,4h6a1,1,0,0,1,1,1Zm8,1.42L18.46,9.88a1,1,0,0,1-.24-1l.51-1.54.39.4A3,3,0,0,1,20,9.83Z"></path>
                                                </svg>
                                                <span className="ms-2 font-size-14">
                                                    Hybrid/Gasoline
                                                </span>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="20"
                                                    fill="#189cf4"
                                                >
                                                    <path d="M19.088,4.95453c-.00732-.00781-.00952-.01819-.01715-.02582s-.01819-.00995-.02606-.01733a9.97886,9.97886,0,0,0-14.08948,0c-.00787.00738-.01837.00964-.02606.01733s-.00983.018-.01715.02582a10,10,0,1,0,14.1759,0ZM12,20a7.9847,7.9847,0,0,1-6.235-3H9.78027a2.9636,2.9636,0,0,0,4.43946,0h4.01532A7.9847,7.9847,0,0,1,12,20Zm-1-5a1,1,0,1,1,1,1A1.001,1.001,0,0,1,11,15Zm8.41022.00208L19.3999,15H15a2.99507,2.99507,0,0,0-2-2.81573V9a1,1,0,0,0-2,0v3.18427A2.99507,2.99507,0,0,0,9,15H4.6001l-.01032.00208A7.93083,7.93083,0,0,1,4.06946,13H5a1,1,0,0,0,0-2H4.06946A7.95128,7.95128,0,0,1,5.68854,7.10211l.65472.65473A.99989.99989,0,1,0,7.75732,6.34277l-.65466-.65466A7.95231,7.95231,0,0,1,11,4.06946V5a1,1,0,0,0,2,0V4.06946a7.95231,7.95231,0,0,1,3.89734,1.61865l-.65466.65466a.99989.99989,0,1,0,1.41406,1.41407l.65472-.65473A7.95128,7.95128,0,0,1,19.93054,11H19a1,1,0,0,0,0,2h.93054A7.93083,7.93083,0,0,1,19.41022,15.00208Z"></path>
                                                </svg>
                                                <span className="ms-2 font-size-14">
                                                    Automatic/Manual
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p className="card-text">{car.model}</p> */}
                                </div>
                                <div className="footer-card">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <span>{car.price}€ /month</span>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <div className="car-favorite">
                                                    <svg
                                                        width="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                                    </svg>
                                                </div>
                                                <Link
                                                    to={`/cars/${car.id}`}
                                                    className="btn-default btn-small"
                                                >
                                                    Rent now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

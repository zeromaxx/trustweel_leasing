import React, { useState, useEffect } from "react";
import Car from "../../../public/img/car.webp";

export default function Fleet() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("api/cars")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCars(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);
    return (
        <div className="fleet">
            <div className="container">
                <div className="row">
                    {cars.map((car) => (
                        // <li key={car.id}>
                        //     {car.name} - {car.model}
                        // </li>
                        <div key={car.id} className="col-md-3">
                            <div className="card mx-auto my-5">
                                <div className="card-top-actions">
                                    <span className="badge bg-secondary">
                                        Passenger cars
                                    </span>
                                    <span className="badge bg-success">
                                        In stock
                                    </span>
                                </div>
                                <img
                                    src={Car}
                                    className="card-img-top"
                                    alt="Fiat 500"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{car.name}</h5>
                                    <p className="card-text">{car.model}</p>
                                    <p className="old-price">205€</p>
                                    <p className="price">
                                        {car.price}€{" "}
                                        <span className="vat">+VAT</span>
                                    </p>
                                    <a href="#" className="btn btn-view-offer">
                                        View this offer
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

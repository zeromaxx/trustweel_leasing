import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

export default function CarDetails() {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        fetch(`/api/cars/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCarDetails(data);
            })
            .catch((error) => console.error("Error:", error));
    }, [id]);

    const [order, setOrder] = useState({
        name: "",
        phone: "",
        address: "",
        payment_type: "",
        product_id: carDetails.id,
    });

    const saveOrder = (productId) => {
        const orderData = { ...order, product_id: productId };
        fetch(`/api/cars/saveOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.error) {
                    setOrder({
                        name: "",
                        phone: "",
                        address: "",
                        payment_type: "",
                        product_id: carDetails.id,
                    });
                    setError("");
                    setSuccess(data.message);
                } else {
                    setError(data.error);
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleNewOrderChange = (e) => {
        const { name, value } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="car-details">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1>{carDetails.name}</h1>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="details">
                            <img
                                src={`/${carDetails.image}`}
                                alt={carDetails.name}
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="offer">
                            <span className="offer__title">Offer</span>
                            <div className="offer__wrap">
                                <span className="offer__price">
                                    ${carDetails.price} <sub>/ month</sub>
                                </span>
                                <button
                                    type="button"
                                    className="offer__rent btn-default"
                                    onClick={() => setShowModal(true)}
                                >
                                    <span>Rent now</span>
                                </button>
                            </div>

                            <span className="offer__title">Lease terms</span>
                            <ul className="offer__list">
                                <li>
                                    <span className="offer__list-name">
                                        Monthly payment
                                    </span>
                                    <span className="offer__list-value offer__list-value--dark">
                                        ${carDetails.price}
                                    </span>
                                </li>
                                <li>
                                    <span className="offer__list-name">
                                        Cash incentive
                                    </span>
                                    <span className="offer__list-value">
                                        To be provided by seller
                                    </span>
                                </li>
                                <li>
                                    <span className="offer__list-name">
                                        Transfer fee
                                    </span>
                                    <span className="offer__list-value">
                                        To be provided by seller
                                    </span>
                                </li>
                                <li>
                                    <span className="offer__list-name">
                                        Disposition fee
                                    </span>
                                    <span className="offer__list-value">
                                        To be provided by seller
                                    </span>
                                </li>
                                <li>
                                    <span className="offer__list-name">
                                        Leasing company
                                    </span>
                                    <span className="offer__list-value offer__list-value--dark">
                                        Toyota Financial Services
                                    </span>
                                </li>
                            </ul>

                            <span className="offer__title">Car details</span>
                            <ul className="offer__details">
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path>
                                    </svg>
                                    <span>{carDetails.space} People</span>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.54,6.29,19,4.75,17.59,3.34a1,1,0,0,0-1.42,1.42l1,1-.83,2.49a3,3,0,0,0,.73,3.07l2.95,3V19a1,1,0,0,1-2,0V17a3,3,0,0,0-3-3H14V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V16h1a1,1,0,0,1,1,1v2a3,3,0,0,0,6,0V9.83A5,5,0,0,0,20.54,6.29ZM12,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12h8Zm0-9H4V5A1,1,0,0,1,5,4h6a1,1,0,0,1,1,1Zm8,1.42L18.46,9.88a1,1,0,0,1-.24-1l.51-1.54.39.4A3,3,0,0,1,20,9.83Z"></path>
                                    </svg>
                                    <span>{carDetails.fuel}</span>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12,12a1,1,0,1,0,1,1A1,1,0,0,0,12,12Zm9.71-2.36a0,0,0,0,1,0,0,10,10,0,0,0-19.4,0,0,0,0,0,1,0,0,9.75,9.75,0,0,0,0,4.72,0,0,0,0,1,0,0A10,10,0,0,0,9.61,21.7h0a9.67,9.67,0,0,0,4.7,0h0a10,10,0,0,0,7.31-7.31,0,0,0,0,1,0,0,9.75,9.75,0,0,0,0-4.72ZM12,4a8,8,0,0,1,7.41,5H4.59A8,8,0,0,1,12,4ZM4,12a8.26,8.26,0,0,1,.07-1H6v2H4.07A8.26,8.26,0,0,1,4,12Zm5,7.41A8,8,0,0,1,4.59,15H7a2,2,0,0,1,2,2Zm4,.52A8.26,8.26,0,0,1,12,20a8.26,8.26,0,0,1-1-.07V18h2ZM13.14,16H10.86A4,4,0,0,0,8,13.14V11h8v2.14A4,4,0,0,0,13.14,16ZM15,19.41V17a2,2,0,0,1,2-2h2.41A8,8,0,0,1,15,19.41ZM19.93,13H18V11h1.93A8.26,8.26,0,0,1,20,12,8.26,8.26,0,0,1,19.93,13Z"></path>
                                    </svg>
                                    <span>{carDetails.gearbox}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                className="order-modal"
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modal__title">Rent car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal__form">
                        <div className="sign__group">
                            <label
                                htmlFor="fullname"
                                className="sign__label sign__label--modal"
                            >
                                Name
                            </label>
                            <input
                                id="fullname"
                                type="text"
                                name="name"
                                className="sign__input"
                                placeholder="Full name"
                                value={order.name}
                                onChange={handleNewOrderChange}
                            />
                        </div>

                        <div className="sign__group">
                            <label
                                htmlFor="phone"
                                className="sign__label sign__label--modal"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                className="sign__input"
                                placeholder="090 123 45 67"
                                value={order.phone}
                                onChange={handleNewOrderChange}
                            />
                        </div>

                        <div className="sign__group">
                            <label
                                htmlFor="address"
                                className="sign__label sign__label--modal"
                            >
                                Car delivery address
                            </label>
                            <input
                                id="address"
                                type="text"
                                name="address"
                                className="sign__input"
                                placeholder="221B Baker St, Marylebone, London"
                                value={order.address}
                                onChange={handleNewOrderChange}
                            />
                        </div>

                        <div className="sign__group">
                            <label className="sign__label sign__label--modal">
                                Payment method:
                            </label>

                            <ul className="sign__radio">
                                <li>
                                    <input
                                        id="type1"
                                        type="radio"
                                        name="payment_type"
                                        value="Visa"
                                        checked={order.payment_type === "Visa"}
                                        onChange={handleNewOrderChange}
                                    />
                                    <label htmlFor="type1">Visa</label>
                                </li>
                                <li>
                                    <input
                                        id="type2"
                                        type="radio"
                                        name="payment_type"
                                        value="Mastercard"
                                        checked={
                                            order.payment_type === "Mastercard"
                                        }
                                        onChange={handleNewOrderChange}
                                    />
                                    <label htmlFor="type2">Mastercard</label>
                                </li>
                                <li>
                                    <input
                                        id="type3"
                                        type="radio"
                                        name="payment_type"
                                        value="Paypal"
                                        checked={
                                            order.payment_type === "Paypal"
                                        }
                                        onChange={handleNewOrderChange}
                                    />
                                    <label htmlFor="type3">Paypal</label>
                                </li>
                            </ul>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn-default"
                        onClick={() => saveOrder(carDetails.id)}
                    >
                        Pay
                    </button>

                    {error && <ErrorMessage message={error} className="mt-3 w-100 font-size-14" />}
                    {success && <SuccessMessage message={success} className="mt-3 w-100 font-size-14"/>}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

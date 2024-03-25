import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";

function Dashboard() {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentCar, setCurrentCar] = useState({});
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newCar, setNewCar] = useState({
        name: "",
        price: "",
        stock: "",
        image: undefined,
        year: "",
        gearbox: "",
        fuel: "",
        space: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "admin") {
            navigate("/login");
        } else {
            fetch("api/cars")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setCars(data);
                })
                .catch((error) => console.error("Error:", error));
        }
    }, []);

    const handleNewCarChange = (e) => {
        const { name, value } = e.target;
        setNewCar((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditClick = (carId) => {
        fetch(`api/cars/${carId}`)
            .then((response) => response.json())
            .then((data) => {
                setCurrentCar(data);
                setShowModal(true);
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleDeleteClick = (carId) => {
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            fetch(`api/cars/${carId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        const updatedCars = cars.filter(
                            (car) => car.id !== carId
                        );
                        setCars(updatedCars);
                    } else {
                        throw new Error("Failed to delete the car.");
                    }
                })
                .catch((error) => console.error("Error:", error));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentCar((prevCar) => ({
            ...prevCar,
            [name]: value,
        }));
    };

    const saveCarDetails = () => {
        if (!currentCar) return;

        fetch(`api/cars/${currentCar.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentCar),
        })
            .then((response) => response.json())
            .then((updatedCar) => {
                setShowModal(false);
                const updatedCars = cars.map((car) => {
                    if (car.id === updatedCar.id) {
                        return updatedCar;
                    }
                    return car;
                });
                setCars(updatedCars);
            })
            .catch((error) => console.error("Error:", error));
    };

    const createCar = () => {
        const formData = new FormData();
        formData.append("name", newCar.name);
        formData.append("price", newCar.price);
        formData.append("stock", newCar.stock);
        formData.append("year", newCar.year);
        formData.append("gearbox", newCar.gearbox);
        formData.append("fuel", newCar.fuel);
        formData.append("space", newCar.space);

        if (newCar.image) formData.append("image", newCar.image);

        fetch("api/cars", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((createdCar) => {
                if (!createdCar.error) {
                    setCars(cars.concat(createdCar));
                    setShowCreateModal(false);
                } else {
                    setError(createdCar.error);
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setNewCar((prevCar) => ({
            ...prevCar,
            image: file,
        }));
    };

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Our Fleet</h1>
                    <button
                        className="btn-default btn-small text-dark"
                        onClick={() => setShowCreateModal(true)}
                        style={{ gap: "6px" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 50 50"
                            xmlSpace="preserve"
                        >
                            <path fill="none" d="M0 0H50V50H0z"></path>
                            <path
                                fill="none"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="4"
                                d="M9 25L41 25"
                            ></path>
                            <path
                                fill="none"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="4"
                                d="M25 9L25 41"
                            ></path>
                        </svg>
                        Create
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{car.name}</td>
                                    <td>
                                        {" "}
                                        <img
                                            src={car.image}
                                            className="car-img"
                                            alt="car"
                                            width="50px"
                                        />
                                    </td>
                                    <td>{car.price}</td>
                                    <td>{car.stock}</td>
                                    <td
                                        className="d-flex justify-content-center"
                                        style={{ minWidth: "200px" }}
                                    >
                                        <a
                                            href="#!"
                                            className="btn-default btn-small btn-edit text-dark"
                                            style={{ gap: "6px" }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEditClick(car.id);
                                            }}
                                        >
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 80 80"
                                                version="1.1"
                                                viewBox="0 0 80 80"
                                                xmlSpace="preserve"
                                                width="16"
                                                fill="black"
                                            >
                                                <g>
                                                    <g>
                                                        <path d="M61.8 71.8L8.4 71.8 8.4 18.4 35.1 18.4 35.1 15.4 5.4 15.4 5.4 74.8 64.8 74.8 64.8 41.5 61.8 41.5z"></path>
                                                        <path d="M22.6 46.2l-2.1 13.1 13.1-2.1 1.3-1.4 39.8-39.7-11-10.9L24 44.9l-1.4 1.3zm2.7 2.1l6.1 6.2-7.4 1.2 1.3-7.4zm45.1-32.2l-3.9 4-6.6-6.7 4-3.9 6.5 6.6zm-12.7-.6l6.7 6.7-30.6 30.5-6.6-6.7 30.5-30.5z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            Edit
                                        </a>
                                        <a
                                            href="#!"
                                            className="btn-default btn-small btn-red ms-2 text-dark"
                                            style={{ gap: "6px" }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleDeleteClick(car.id);
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                viewBox="0 0 48 48"
                                            >
                                                <g>
                                                    <path d="M41 48H7V7h34v41zM9 46h30V9H9v37z"></path>
                                                    <path d="M35 9H13V1h22v8zM15 7h18V3H15v4zM16 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1zM24 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1zM32 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1z"></path>
                                                    <path d="M0 7H48V9H0z"></path>
                                                </g>
                                            </svg>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                show={showCreateModal}
                onHide={() => setShowCreateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a new Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form encType="multipart/form-data">
                        <div className="row">
                            <div className="col-md-6">
                                {" "}
                                <div className="mb-3">
                                    <label
                                        htmlFor="carName"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="name"
                                        value={newCar.name}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                {" "}
                                <div className="mb-3">
                                    <label
                                        htmlFor="carPrice"
                                        className="form-label"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="price"
                                        value={newCar.price}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="carStock"
                                        className="form-label"
                                    >
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        className=""
                                        name="stock"
                                        value={newCar.stock}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="year"
                                        className="form-label"
                                    >
                                        Year
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="year"
                                        value={newCar.year}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="gearbox"
                                        className="form-label"
                                    >
                                        GearBox
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="gearbox"
                                        value={newCar.gearbox}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="fuel"
                                        className="form-label"
                                    >
                                        Fuel
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="fuel"
                                        value={newCar.fuel}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="space"
                                        className="form-label"
                                    >
                                        Space
                                    </label>
                                    <input
                                        type="text"
                                        className=""
                                        name="space"
                                        value={newCar.space}
                                        onChange={handleNewCarChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="carImage"
                                        className="form-label"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className=""
                                        name="image"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <ErrorMessage message={error} className="mt-3" />
                        )}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn-default btn-small"
                        onClick={createCar}
                    >
                        Create
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentCar && (
                        <form>
                            <div className="mb-3">
                                <label htmlFor="carName" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className=""
                                    id="carName"
                                    name="name"
                                    value={currentCar.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="carPrice"
                                    className="form-label"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className=""
                                    id="carPrice"
                                    name="price"
                                    value={currentCar.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="carStock"
                                    className="form-label"
                                >
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    className=""
                                    id="carStock"
                                    name="stock"
                                    value={currentCar.stock}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={saveCarDetails}
                        className="btn-default btn-small"
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Dashboard;

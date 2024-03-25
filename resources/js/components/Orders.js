import React, { useState, useEffect } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("api/orders")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setOrders(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="orders mt-5">
            <div className="container">
                <h2>My Orders</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="cart">
                            <div className="cart__table-wrap">
                                <div
                                    className="cart__table-scroll"
                                    data-scrollbar="true"
                                >
                                    <div className="scroll-content">
                                        <table className="cart__table">
                                            <thead>
                                                <tr>
                                                    <th>Car</th>
                                                    <th></th>
                                                    <th>Year</th>
                                                    <th>Transmission</th>
                                                    <th>Fuel type</th>
                                                    <th>Price</th>
                                                    <th>Date Ordered</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {orders.map((order) => {
                                                    return (
                                                        <tr key={order.id}>
                                                            <td>
                                                                <div className="cart__img">
                                                                    <img
                                                                        src={
                                                                            order
                                                                                .product
                                                                                .image
                                                                        }
                                                                        alt={
                                                                            order
                                                                                .product
                                                                                .name
                                                                        }
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {
                                                                    order
                                                                        .product
                                                                        .name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    order
                                                                        .product
                                                                        .year
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    order
                                                                        .product
                                                                        .gearbox
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    order
                                                                        .product
                                                                        .fuel
                                                                }
                                                            </td>
                                                            <td>
                                                                <span className="cart__price">
                                                                    $
                                                                    {
                                                                        order
                                                                            .product
                                                                            .price
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td>
                                                                {new Intl.DateTimeFormat(
                                                                    "en-US",
                                                                    {
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "2-digit",
                                                                    }
                                                                ).format(
                                                                    new Date(
                                                                        order.created_at
                                                                    )
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Car from "../../../public/img/car.webp";

export default function Fleet() {
    return (
        <div className="fleet">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
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
                                <h5 className="card-title">Fiat 500</h5>
                                <p className="card-text">Hybrid 70hp</p>
                                <p className="old-price">205€</p>
                                <p className="price">
                                    185€ <span className="vat">+VAT</span>
                                </p>
                                <a href="#" className="btn btn-view-offer">
                                    View this offer
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
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
                                <h5 className="card-title">Fiat 500</h5>
                                <p className="card-text">Hybrid 70hp</p>
                                <p className="old-price">205€</p>
                                <p className="price">
                                    185€ <span className="vat">+VAT</span>
                                </p>
                                <a href="#" className="btn btn-view-offer">
                                    View this offer
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
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
                                <h5 className="card-title">Fiat 500</h5>
                                <p className="card-text">Hybrid 70hp</p>
                                <p className="old-price">205€</p>
                                <p className="price">
                                    185€ <span className="vat">+VAT</span>
                                </p>
                                <a href="#" className="btn btn-view-offer">
                                    View this offer
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
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
                                <h5 className="card-title">Fiat 500</h5>
                                <p className="card-text">Hybrid 70hp</p>
                                <p className="old-price">205€</p>
                                <p className="price">
                                    185€ <span className="vat">+VAT</span>
                                </p>
                                <a href="#" className="btn btn-view-offer">
                                    View this offer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CarDetails() {
    return (
        <div>
            <div className="product-detail-container">
                <i className="heart-icon">❤</i>
                <h2>Fiat 500</h2>
                <p>Hybrid 70hp</p>
                <div className="color-options">
                    <span className="color-circle"></span>
                    <span className="color-circle"></span>
                    <span className="color-circle"></span>
                    <span className="color-circle"></span>
                    <span className="color-circle"></span>
                </div>
                <p>Color Pasodoble Red pastel</p>
                <p>Images for illustration purposes only.</p>

                <div className="row spec-table">
                    <div className="col-md-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Body type</td>
                                    <td>City Car</td>
                                </tr>
                                <tr>
                                    <td>Transmission type</td>
                                    <td>Manual</td>
                                </tr>
                                <tr>
                                    <td>CO2 Emission</td>
                                    <td>106 g/km</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Fuel</td>
                                    <td>Petrol</td>
                                </tr>
                                <tr>
                                    <td>Engine displacement</td>
                                    <td>999 cc</td>
                                </tr>
                                <tr>
                                    <td>Fuel consumption</td>
                                    <td>4.7 L</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <a className="show-more">+ Show more</a>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="pricing-card">
                    <span className="badge">Passenger cars</span>
                    <span className="badge">In stock</span>
                    <div className="price my-3">
                        185 € <span className="old-price">206 €</span>{" "}
                        <span className="vat">+VAT</span>
                    </div>
                    <button className="interest-button">I'm interested</button>
                    <ul className="spec-list mt-4">
                        <li>
                            <span>Duration</span>
                            <span>48 months</span>
                        </li>
                        <li>
                            <span>Mileage</span>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                className="slider"
                                id="myRange"
                            />
                        </li>
                        <li>
                            <a href="#">Mileage calculation tool</a>
                        </li>
                        <li>
                            <span>Down payment without VAT</span>
                            <span>
                                2.899 € <i className="info-icon">i</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

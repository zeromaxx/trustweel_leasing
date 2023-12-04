import React, { useState } from 'react';
import LogoImage from "../../../public/img/LPALDlogoheader.webp";
import SuccessMessage from './SuccessMessage';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
                    setSuccess(data.message); // Set success message
                } else {
                    // Handle errors
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <section>
            <div className="col-3">
                <div className="login-wrapper p-3">
                    <div className="text-center">
                        <img src={LogoImage} alt="Logo" className="mb-4 w-100" />
                        <h2 className="mb-4">Register Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-default">Register</button>
                        </form>
                        {success && <SuccessMessage message={success} />}
                    </div>
                </div>
            </div>
        </section>
    )
}


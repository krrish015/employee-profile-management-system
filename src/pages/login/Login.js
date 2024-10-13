
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignInAlt } from 'react-icons/fa';


const LoginForm = () => {
    const [data, setData] = useState({ name: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`https://finalprojectmern.onrender.com/validateadmin`, data);
            const message = response.data.message;
            alert(message);
            if (message === "Admin logged in successfully") {
                window.location.href = "/admin";
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred. Please try again.");
        }
    };


    return (
        <div id='lform' className="container mt-5">
            <h2 className="text-center text-secondary">ADMIN LOGIN</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-danger">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-danger">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <center><button type="submit" className="btn text-light btn-transparent mb-5">
                    <FaSignInAlt style={{ marginRight: '8px' }} />
                    Login
                </button></center>
            </form>
        </div>
    );
};

export default LoginForm;

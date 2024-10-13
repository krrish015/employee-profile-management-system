import React, { useState } from "react";
import axios from "axios";
import Navbar2 from "../../components/Navbar2";
import "./Add.css";
import { FaUserPlus } from 'react-icons/fa';
import background from "../../images/background.jpg";
import Footer from "../../components/Footer"

export default function Add() {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    role: "",
    salary: ""
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/addemployee", data);
      alert(response.data.message);
      setData({
        name: "",
        age: "",
        email: "",
        phone: "",
        role: "",
        salary: ''
      });
      setError(""); // Clear error message on success
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Failed to add employee. Please try again.");
    }
  };

  return (
    <>
      <Navbar2 />
      <div id="content" className="container mt-5">
        <h2 className="text-center text-primary">ADD NEW EMPLOYEE</h2>
        <center>
          <form id='form' onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group my-3">
              <label htmlFor="name" className="text-danger">Name</label>
              <input
                type="text"
                className="form-control text-center text-secondary"
                id="name"
                name="name"
                value={data.name}
                placeholder="Enter Employee Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="age" className="text-danger ">Age</label>
              <input
                type="number"
                className="form-control text-center text-secondary"
                id="age"
                name="age"
                value={data.age}
                placeholder="Enter Employee Age"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="email" className="text-danger">Email</label>
              <input
                type="email"
                className="form-control text-center text-secondary"
                id="email"
                name="email"
                value={data.email}
                placeholder="Enter Employee Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="phone" className="text-danger">Phone</label>
              <input
                type="tel"
                className="form-control text-center text-secondary"
                id="phone"
                name="phone"
                value={data.phone}
                placeholder="Enter Employee Phone"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="role" className="text-danger">Role</label>
              <input
                type="text"
                className="form-control text-center text-secondary"
                id="role"
                name="role"
                placeholder="Enter Employee Role"
                value={data.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="salary" className="text-danger">Salary</label>
              <input
                type="number"
                className="form-control text-center text-secondary"
                id="salary"
                name="salary"
                placeholder="Enter Employee Salary in Rupees"
                value={data.salary}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn text-light btn-success my-3">
              <FaUserPlus style={{ marginRight: '8px' }} /> ADD EMPLOYEE
            </button>
          </form>
        </center>
      </div>
      <Footer/>
    </>
  );
}

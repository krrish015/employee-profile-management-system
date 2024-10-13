import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

export default function Edit() {
  const { eid } = useParams(); 
  const navigate = useNavigate(); 

  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    role: ""
  });
  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getemployee/${eid}`);
        setEmployee(response.data);
      } catch (error) {
        setError("Error fetching employee details.");
        console.error("Error fetching employee details:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchEmployee();
  }, [eid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/updateemployee/${eid}`, employee);
      alert("Employee updated successfully!");
      navigate("/view"); 
    } catch (error) {
      setError("Failed to update employee. Please try again.");
      console.error("Error updating employee:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Navbar2 />
      <div className="container mt-5">
        <h2>Edit Employee</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={employee.age}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={employee.role}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Update Employee</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

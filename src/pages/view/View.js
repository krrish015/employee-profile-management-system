import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2"
import { FaTrash, FaEdit } from 'react-icons/fa';
import background from "../../images/background.jpg"
import Footer from "../../components/Footer";


export default function View() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getemployees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleRemove = async (eid) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      try {
        await axios.delete(`http://localhost:3001/deleteemployee/${eid}`);
        setEmployees(employees.filter((employee) => employee._id !== eid));
        alert("Employee removed successfully!");
      } catch (error) {
        console.error("Error removing employee:", error);
        alert("Failed to remove employee. Please try again.");
      }
    }
  };

  const handleEdit = (eid) => {
    navigate(`/edit/${eid}`)
  }

  return (
    <><Navbar2 />
         {/* <img id="background" src={background} /> */}
    <div id="view-con" className="container mt-5"></div><div className="container mt-5">
      <h2 className="text-center text-danger">EMPLOYEE LIST</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.role}</td>
                <td>{employee.salary}</td>
                <td>
                  <button
                    className="btn btn-transparent text-light"
                    onClick={() => handleRemove(employee._id)}
                  >
                    <FaTrash style={{ marginRight: '8px' }} />
                    Remove
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-transparent text-light"
                    onClick={() => handleEdit(employee._id)}
                  >
                    <FaEdit style={{ marginRight: '8px' }} />
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';
import employeeData from './employeeData.json'; // Import the JSON data

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    setEmployees(employeeData.data); // Use the imported JSON data
  }, []);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = (updatedEmployee) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setSelectedEmployee(null);


  };

  return (
    <div className="App">
      <h1 className='heading'>Employee Dashboard</h1>
      <div className="employee-list">
        <h2>Employee List</h2>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.employee_name}
              <button onClick={() => handleEdit(employee)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="employee-details">
        <h2>Employee Details</h2>
        {selectedEmployee ? (
          <div>
            <p>Name: {selectedEmployee.employee_name}</p>
            <p>Salary: {selectedEmployee.employee_salary}</p>
            <p>Age: {selectedEmployee.employee_age}</p>
            <p>Image: {selectedEmployee.profile_image}</p>
            <button onClick={() => handleSave(selectedEmployee)}>Save</button>
          </div>
        ) : (
          <p>Select an employee to edit</p>
        )}
      </div>
    </div>
  );
}


export default App;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Reg.css'
 // Import the CSS for react-toastify

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    address:'',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);

        navigate('/login');
      } else if (data.message === "Email is already in use") {
        
      } else {
        console.error('Registration failed:', data);
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  }

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className='signup-box'>
          <form onSubmit={handleSubmit}>
            <div>
              <h2>SignUp</h2>
              <label>UserName</label>
              <input 
                type="text"
                value={formData.userName}
                name="userName"
                onChange={handleChange}
              />
              <label>Phone Number</label>
              <input 
                type="number"
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
              />
              <label>Address</label>
              <input 
                type="text"
                value={formData.address}
                name="address"
                onChange={handleChange}
              />
              <label>Email</label>
              <input 
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <label>Password</label>
              <input 
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
            <hr />
            <p style={{ marginTop: "10px" }}>Already Have an Account!! <Link to='/login' style={{ color: "#e18a0f" }}>Sign In</Link></p>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default SignUp;
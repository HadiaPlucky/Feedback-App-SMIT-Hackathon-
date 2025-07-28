import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch('http://localhost:5000/api/admin/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password })
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       localStorage.setItem('token', data.token);
  //       navigate('/admin-dashboard');
  //     } else {
  //       alert(data.message || 'Login failed');
  //     }
  //   } catch (error) {
  //     alert('Error logging in');
  //   }
  // };
 const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedEmail = 'admin@example.com';
    const hardcodedPassword = 'admin123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Optionally store a fake token
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    teacher: '',
    rating: '',
    comments: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('feedbacks')) || [];
    existing.push(newFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(existing));

    // Reset form
    setFormData({
      name: '',
      department: '',
      teacher: '',
      rating: '',
      comments: ''
    });

    // Navigate to thank you page
    navigate('/thankyou');
  };

  return (
    <div className="form-container">
      <h2>Student Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>

        <label>Department:
          <input type="text" name="department" required value={formData.department} onChange={handleChange} />
        </label>

        <label>Teacher's Name:
          <input type="text" name="teacher" required value={formData.teacher} onChange={handleChange} />
        </label>

        <label>Rating (1 to 5):
          <input type="number" name="rating" min="1" max="5" required value={formData.rating} onChange={handleChange} />
        </label>

        <label>Comments:
          <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
        </label>

        <button type="submit">Submit Feedback</button>
        <button type="button" onClick={() => navigate('/admin')}>Admin Login</button>
      </form>
    </div>
  );
}

export default FeedbackForm;

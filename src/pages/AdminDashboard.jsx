import React, { useEffect, useState } from 'react';
import FeedbackTable from '../components/FeedbackTable';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch feedback from localStorage
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbackList(storedFeedbacks);
  }, []);

  return (
    <div className="dashboard-container" style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>

      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <FeedbackTable feedbackList={feedbackList} />
      )}
      <button type="button" onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}

export default AdminDashboard;

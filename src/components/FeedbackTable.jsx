import React from 'react';

function FeedbackTable({ feedbackList }) {
  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Teacher</th>
          <th>Rating</th>
          <th>Comments</th>
          <th>Submitted At</th>
        </tr>
      </thead>
      <tbody>
        {feedbackList.map((feedback, index) => (
          <tr key={index}>
            <td>{feedback.name}</td>
      
            <td>{feedback.department}</td>
            <td>{feedback.teacher}</td>
            <td>{feedback.rating}</td>
            <td>{feedback.comments}</td>
            <td>{new Date(feedback.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FeedbackTable;

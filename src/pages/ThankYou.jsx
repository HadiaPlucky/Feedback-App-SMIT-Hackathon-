import React from 'react';

function ThankYou() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You!</h1>
      <p style={styles.message}>
        Your feedback has been submitted successfully. We appreciate your time!
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
  },
  heading: {
    fontSize: '36px',
    color: 'teal',
  },
  message: {
    fontSize: '20px',
    marginTop: '20px',
  },
};

export default ThankYou;

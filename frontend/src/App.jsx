import React from 'react';

function App() {
  // Optional: define a click handler
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Product Manager</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

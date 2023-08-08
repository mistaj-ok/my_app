import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import App from './App'; // Import your App component

// Use createRoot to render the component
const root = createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the addition of Routes
import { MyNavbar } from './components';
import { Home } from './components'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <MyNavbar />
          <Routes> 
            <Route path="/" element={<Home />} /> 
            {/* <Route path="/" element={<Home />} />  */}
            {/* <Route path="/" element={<Home />} />  */}
            {/* Define more routes and elements */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

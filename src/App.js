import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import RegistrationForm from './Components/RegistrationForm';
import SuccessPage from './Components/SuccessPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/successpage" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;



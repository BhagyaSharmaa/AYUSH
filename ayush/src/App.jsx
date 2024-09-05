// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
//import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage'; // Import additional pages

function App() {
  return (
    <Router>
      
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;

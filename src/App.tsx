import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/home/index';
import AboutUs from './pages/aboutUs';
import Properties from './pages/properties';
import ContactUs from './pages/conatactUs';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/properties" element={<Properties />} /> 
        <Route path="/Contact" element={<ContactUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;

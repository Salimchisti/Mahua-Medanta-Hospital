import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Excellence from './pages/Excellence';
import SignUp from './pages/SignUp';
import Overview from './components/Overview/overview';
import Footer from './pages/footer';
import HeroPage from './Hero/HeroPage';
import Orthopaedics from './pages/Orthopaedics';
import Navbar from './components/Navbar';
import Cardiology from './pages/Cardiology';
import Specialities from './pages/Specialities';
import Neurology from './pages/Neurology';
import ScrollToTop from './Hero/ScrollToTop'; // Import ScrollToTop component
import DirectorPage from './pages/DirectorPage';
import LscsInfo from './pages/LscsInfo'; 
import BloodTestInfo from './pages/BloodTestInfo';
import LaparoscopyPage from './pages/LaparoscopyPage';
import AppointmentPage from './pages/appointment';
import GeneralSurgeryPage from './pages/GeneralSurgery';
import EmergencyCarePage from './pages/EmergencyCare';
import ContactUsPage from './pages/ContactUs';
import Doctors from './pages/Doctors'


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excellence" element={<Excellence />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/hero" element={<HeroPage />} />
          <Route path="/orthopaedics" element={<Orthopaedics />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path='/specialities' element={<Specialities />} />
          <Route path='/neurology' element={<Neurology />} />
          <Route path='/DirectorPage' element={<DirectorPage />} />
          <Route path="/lscs-info" element={<LscsInfo />} />
          <Route path='BloodTestInfo' element={<BloodTestInfo />} />
          <Route path='LaparoscopyPage' element={<LaparoscopyPage />} />
          <Route path='/appointment' element={<AppointmentPage />} />
          <Route path='/GeneralSurgery' element={<GeneralSurgeryPage />} />
          <Route path='EmergencyCarePage' element={<EmergencyCarePage />} />
          <Route path='/ContactUs' element={<ContactUsPage />} />
          <Route path='/Doctors' element={<Doctors/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

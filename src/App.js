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
import ScrollToTop from './Hero/ScrollToTop';
import DirectorPage from './pages/DirectorPage';
import LscsInfo from './pages/LscsInfo';
import BloodTestInfo from './pages/BloodTestInfo';
import LaparoscopyPage from './pages/LaparoscopyPage';
import AppointmentPage from './pages/appointment';
import GeneralSurgeryPage from './pages/GeneralSurgery';
import EmergencyCarePage from './pages/EmergencyCare';
import ContactUsPage from './pages/ContactUs';
import Doctors from './pages/Doctors';
import BloodSugar from './components/HealthBlog/BloodSuger';
import HealthBlog from './components/HealthBlog/HealthBlog';
import ChildObesity from './components/HealthBlog/ChildObesity';
import HealthyLifeStyle from './components/HealthBlog/HealthyLifeStyle';
import Kidneys from './components/HealthBlog/Kidneys';
import QuitSmoking from './components/HealthBlog/QuitSmoking';
import VitaminD from './components/HealthBlog/VitaminD';
import BurnTreatment from './pages/BurnTreatment';
import PoisoningToxicology from './pages/PoisoningToxicology';
import GynecologyObstetrics from './pages/GynecologyObstetrics';
import FractureManagement from './pages/FractureManagement';
import TraumaCare from './pages/TraumaCare';
import EmergencyResponse from './pages/EmergencyResponse';
import PediatricCare from './pages/PediatricCare';
import InternalMedicine from './pages/InternalMedicine';
import CriticalCare from './pages/CriticalCare';
import MedicineEssentials from './Hero/MedicineEssentials';
import DoctorAppointment from './Hero/DoctorAppointment';
import LabTestBooking from './Hero/LabTestBooking';
import InsurancePlans from './Hero/InsurancePlans';
import AdminLayout from './admin/AdminLayout'; // Assuming this is your admin layout
import AdminBookAppointments from './admin/adminpages/AdminBookAppointments';
import AdminDoctorsAppointments from './admin/adminpages/AdminDoctorsAppointments';
import AdminRequestCallback from './admin/adminpages/AdminRequestCallback';
import ManageLabTestsPage from './admin/adminpages/ManageLabTestsPage';
import AdminInsurancePlans from './admin/adminpages/AdminInsurancePlans';
import Dashboard from './admin/dashboard';
import AdminContactUsPage from './admin/adminpages/AdminContactUsPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
      <div className="App min-h-screen">
        {/* Conditionally render Navbar and Footer based on route */}
        {window.location.pathname.startsWith('/admin') ? null : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excellence" element={<Excellence />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/hero" element={<HeroPage />} />
          <Route path="/orthopaedics" element={<Orthopaedics />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/DirectorPage" element={<DirectorPage />} />
          <Route path="/lscs-info" element={<LscsInfo />} />
          <Route path="/BloodTestInfo" element={<BloodTestInfo />} />
          <Route path="/LaparoscopyPage" element={<LaparoscopyPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/GeneralSurgery" element={<GeneralSurgeryPage />} />
          <Route path="/EmergencyCarePage" element={<EmergencyCarePage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/healthBlog" element={<HealthBlog />} />
          <Route path="/BloodSugar" element={<BloodSugar />} />
          <Route path="/ChildObesity" element={<ChildObesity />} />
          <Route path="/health-blog/healthy-lifestyle" element={<HealthyLifeStyle />} />
          <Route path="/Kidneys" element={<Kidneys />} />
          <Route path="/QuitSmoking" element={<QuitSmoking />} />
          <Route path="/VitaminD" element={<VitaminD />} />
          <Route path="/BurnTreatment" element={<BurnTreatment />} />
          <Route path="/PoisoningToxicology" element={<PoisoningToxicology />} />
          <Route path="/GynecologyObstetrics" element={<GynecologyObstetrics />} />
          <Route path="/FractureManagement" element={<FractureManagement />} />
          <Route path="/TraumaCare" element={<TraumaCare />} />
          <Route path="/EmergencyResponse" element={<EmergencyResponse />} />
          <Route path="/PediatricCare" element={<PediatricCare />} />
          <Route path="/InternalMedicine" element={<InternalMedicine />} />
          <Route path="/CriticalCare" element={<CriticalCare />} />
          <Route path="/MedicineEssentials" element={<MedicineEssentials />} />
          <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
          <Route path="/LabTestBooking" element={<LabTestBooking />} />
          <Route path="/InsurancePlans" element={<InsurancePlans />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Define your admin-specific routes here */}
            <Route index element={<Dashboard />} /> {/* Example admin dashboard route */}
            <Route path="appointments" element={<AdminBookAppointments />} />
            <Route path="/admin/doctor-appointments" element={<AdminDoctorsAppointments />} />
            <Route path="/admin/callback-requests" element={<AdminRequestCallback />} />
            <Route path="/admin/lab-tests" element={<ManageLabTestsPage />} />
            <Route path="/admin/insurance" element={<AdminInsurancePlans />} />
            <Route path="/admin/contactus" element={<AdminContactUsPage />} />

            {/* Add more admin routes as needed */}
          </Route>
        </Routes>
        {window.location.pathname.startsWith('/admin') ? null : <Footer />}
      </div>
    </Router>
  );
}

export default App;
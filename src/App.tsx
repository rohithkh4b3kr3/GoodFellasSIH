import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About.tsx";
import Announcements from "./pages/Announcements.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ScientistPage from "./pages/ScientistPage.tsx"; 
import PublicComplaintPage from "./pages/PublicComplaintPage.tsx";
import ComplaintSubmitted from "./pages/ComplaintSubmitted.tsx";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Announcements" element={<Announcements />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/scientist" element={<ScientistPage />} />
          <Route path="/public" element={<PublicComplaintPage />} /> {/* ✅ updated path */}
          <Route path="/complaint-submitted" element={<ComplaintSubmitted />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

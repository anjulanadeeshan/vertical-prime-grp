import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import LincolnUniversity from './components/LincolnUniversity';
import YouTubeChannel from './components/YouTubeChannel';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { WhatsAppWidget } from './components/ProfessionalFeatures';
import RendidPage from './pages/RendidPage';
import WECPage from './pages/WECPage';
import './App.css';

function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <main className="pt-20">
            <HeroSection />
            <BrandsSection />
            <LincolnUniversity />
            <YouTubeChannel />
            <ContactPage />
          </main>
        } />

        {/* Brand Pages */}
        <Route path="/rendid" element={<RendidPage />} />
        <Route path="/wec" element={<WECPage />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

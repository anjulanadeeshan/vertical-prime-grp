import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationalAgencies from './components/EducationalAgencies';
import LincolnUniversity from './components/LincolnUniversity';
import YouTubeChannel from './components/YouTubeChannel';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { WhatsAppWidget } from './components/ProfessionalFeatures';
import './App.css';

function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <EducationalAgencies />
        <LincolnUniversity />
        <YouTubeChannel />
        <ContactPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

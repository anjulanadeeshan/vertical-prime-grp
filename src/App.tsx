import { Routes, Route } from 'react-router-dom';
import HeroCarousel from '@/components/sections/HeroCarousel';
import BrandsSection from '@/components/sections/BrandsSection';
import LincolnUniversity from '@/components/sections/LincolnUniversity';
import YouTubeChannel from '@/components/YouTubeChannel';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import { WhatsAppWidget } from '@/components/ProfessionalFeatures';
import RendidPage from '@/pages/RendidPage';
import WECPage from '@/pages/WECPage';

function App() {
    return (
        <div id="home" className="min-h-screen bg-white">
            <Routes>
                {/* Home Page */}
                <Route path="/" element={
                    <main>
                        <HeroCarousel />
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

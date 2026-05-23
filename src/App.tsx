import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import MainContent from './components/MainContent';
import BottomSections from './components/BottomSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <StatsBar />
      <MainContent />
      <BottomSections />
      <Footer />
    </div>
  );
}

export default App;

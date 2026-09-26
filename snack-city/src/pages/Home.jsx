import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import MenuGrid from '../components/MenuGrid';
import DealsBanner from '../components/DealsBanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-base font-sans">
      <Navbar />
      <main>
        <HeroSlider />
        <MenuGrid />
        <DealsBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

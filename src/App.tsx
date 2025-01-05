import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services/index';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio/index';
import Contact from '@/components/Contact/index';
import ParallaxSection from '@/components/ParallaxSection';
import Footer from '@/components/Footer/index';

const Home = () => {
  const { observeElements } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
    onIntersect: (entry) => {
      entry.target.classList.add('animate-fade-in');
    }
  });

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    observeElements(sections);
  }, [observeElements]);

  return (
    <>
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <ParallaxSection />
        <Contact />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
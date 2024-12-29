import { motion } from "framer-motion";
import { useState } from "react";
import { CV } from "./CV";

export const Hero = () => {
  const [showCV, setShowCV] = useState(false);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-dark text-white p-4">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark-lighter"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          opacity: 0.2
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Ryan Monteith
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-accent mb-3">
            Picture Editor
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Award-winning editor with over a decade of experience crafting compelling narratives for documentaries and unscripted television
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToPortfolio}
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-dark font-semibold rounded-full transition-colors duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={() => setShowCV(true)}
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-dark rounded-full transition-colors duration-300"
          >
            View CV
          </button>
          <a 
            href="#about" 
            className="px-8 py-3 border border-white/20 hover:border-accent hover:text-accent rounded-full transition-colors duration-300"
          >
            Learn More
          </a>
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 border border-white/20 hover:border-accent hover:text-accent rounded-full transition-colors duration-300"
          >
            Contact
          </button>
        </motion.div>
      </div>

      {showCV && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCV(false)} />
          <CV />
          <button
            onClick={() => setShowCV(false)}
            className="fixed top-4 right-4 z-50 text-white hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};
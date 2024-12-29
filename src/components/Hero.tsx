import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-dark text-white p-4">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark-lighter"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          opacity: 0.4
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-accent text-xl md:text-2xl font-medium mb-4">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Picture <span className="text-accent">Editor</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Crafting compelling narratives for documentaries and unscripted television
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-dark font-semibold rounded-full transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border border-white/20 hover:border-accent hover:text-accent rounded-full transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>
    </section>
  );
};
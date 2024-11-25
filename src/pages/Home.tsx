import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-64px)] relative overflow-hidden">
        {/* Background shapes */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute right-20 top-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            {/* Left content */}
            <div className="z-10">
              <motion.p 
                className="text-gold uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Coaching sportif personnalisé
              </motion.p>
              <motion.h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Transformez votre vie avec Tokyo Coaching
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Découvrez une approche unique du coaching sportif, alliant expertise japonaise et méthodes modernes pour des résultats durables.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center space-x-2 bg-charcoal text-cream px-6 py-3 rounded-full hover:bg-gold transition-colors duration-300"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right content - Hero image */}
            <motion.div 
              className="relative z-10 hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Coach sportif en action" 
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
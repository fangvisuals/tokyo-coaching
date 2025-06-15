import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Globe2, Home, Apple, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const Services = () => {
  return (
    <PageTransition>
      <div className="bg-white py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="page-title text-center mb-16">Mes Services</h1>

            {/* Coaching Personnalisé */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                      alt="Coaching personnalisé"
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-full">
                      <Dumbbell className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="section-title">Coaching Personnalisé</h2>
                  <div className="space-y-4">
                    <p className="text-lg mb-6">Un accompagnement sur mesure pour :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        <span>Perte de poids</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        <span>Prise de masse</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        <span>Préparation physique/musculation/remise en forme</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        <span>Force athlétique (distanciel et présentiel sur Montpellier, avec possibilité d'accompagnement en compétition)</span>
                      </li>
                    </ul>
                    <p className="mt-6 text-charcoal/80">Chaque programme est adapté à ton niveau et à tes besoins, avec des retours réguliers pour optimiser tes séances.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Coaching Distanciel & Présentiel */}
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-cream rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <Globe2 className="w-8 h-8 text-gold" />
                    <h2 className="text-2xl font-display">Coaching en distanciel</h2>
                  </div>
                  <div className="space-y-4">
                    <p>Simple et flexible : tu gères ton emploi du temps comme tu veux.</p>
                    <p>Disponibilité 7j/7 via WhatsApp ou Instagram pour répondre à tes questions.</p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1604480132736-44c188fe3d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                  alt="Coaching en ligne"
                  className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <Home className="w-8 h-8 text-gold" />
                    <h2 className="text-2xl font-display">Coaching en présentiel</h2>
                  </div>
                  <p>À domicile, uniquement sur Montpellier, pour un accompagnement personnalisé et motivant.</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                  alt="Coaching à domicile"
                  className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                />
              </motion.div>
            </div>

            {/* Conseils en nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="bg-charcoal text-cream rounded-2xl p-12 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <Apple className="w-8 h-8 text-gold" />
                      <h2 className="text-2xl font-display">Conseils en nutrition</h2>
                    </div>
                    <div className="space-y-4">
                      <p>Optimise ton alimentation pour mieux performer, perdre du poids ou prendre de la masse.</p>
                      <p className="text-gold">Une alimentation de qualité, adaptée à tes objectifs, représente 50 % de tes résultats.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                      alt="Nutrition"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tarifs et formules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <CreditCard className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-display">Tarifs et formules</h2>
              </div>
              <p className="text-lg mb-8">Des options adaptées à tes besoins et ton budget. Contacte-moi pour recevoir une offre personnalisée grâce à notre formulaire.</p>
              <Link to="/contact" className="animated-button">
                <span>Demander un devis</span>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Services;
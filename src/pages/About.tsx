import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Heart, Target, Sparkles, GraduationCap } from 'lucide-react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="bg-white py-16">
        <Container>
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-display mb-8">
                  Hello, moi c'est{' '}
                  <span className="relative">
                    Clélia
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                  !
                </h1>
                <p className="text-lg text-charcoal/80">
                  Passionnée de sport et coach dévouée, je t'accompagne vers tes objectifs avec expertise et bienveillance.
                </p>
              </div>
              <div className="relative">
                <img
                  src="dist/assets/clelia.webp"
                  alt="Portrait de coach"
                  className="rounded-2xl shadow-xl"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Qualifications Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-24 bg-cream rounded-2xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <Award className="w-8 h-8 text-gold" />
                <h2 className="text-3xl font-display">Qualifications</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <p>Diplômée en préparation physique depuis 2024</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <p>Brevets fédéraux en haltérophilie, force athlétique, crosstraining et culturisme</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <p>Expérience en cours collectifs et stages pratiques</p>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Diplômes et certifications"
              className="absolute top-0 right-0 w-48 h-full object-cover opacity-10"
            />
          </motion.div>

          {/* Formation Continue */}
          <motion.div 
            className="max-w-4xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-charcoal text-cream rounded-2xl p-12">
              <div className="flex items-center space-x-4 mb-8">
                <Brain className="w-8 h-8 text-gold" />
                <h2 className="text-3xl font-display">Formation continue</h2>
              </div>
              <p className="text-lg mb-6">
                Bien que diplômée, je continue de me former chaque jour pour rester à jour et te proposer le meilleur accompagnement possible.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display mb-2">Veille scientifique</h3>
                  <p className="text-cream/80">Dernières recherches en science du sport</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display mb-2">Pratique régulière</h3>
                  <p className="text-cream/80">Expérimentation constante</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display mb-2">Écoute active</h3>
                  <p className="text-cream/80">Adaptation aux besoins</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mon Approche */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Coaching personnalisé"
                className="w-full h-64 object-cover rounded-2xl mb-12"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent rounded-2xl flex items-center">
                <div className="p-12">
                  <h2 className="text-3xl font-display text-white mb-4">Mon approche</h2>
                  <p className="text-white/90 max-w-xl">
                    Un coaching, pour moi, c'est bien plus qu'un simple programme. Je t'aide à gagner confiance en toi, à t'aimer tel(le) que tu es et à atteindre tes objectifs de façon durable.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cream p-8 rounded-2xl mt-8">
              <p className="text-lg text-center italic">
                "Chaque programme est unique, car il est pensé pour TOI : tes besoins, tes envies et même les exercices que tu aimes moins."
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default About;
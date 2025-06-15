import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageHeader from '../assets/image_header.webp';
import medaille from '../assets/icons/medaille.png';
import halteres from '../assets/icons/halteres.png';
import couronne from '../assets/icons/couronne.png';
import PageTransition from '../components/PageTransition';


const Home = () => {
  return (
    <PageTransition>
      <div className="relative">
        <div className="min-h-[calc(100vh-64px)] relative overflow-hidden">
          {/* Background shapes */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink opacity-100 mix-blend-multiply filter blur-xl animate-blob"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute right-20 top-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold opacity-70 mix-blend-multiply filter blur-xl animate-blob"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />

          <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
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
                  Entraînez-vous intelligemment, dépassez vos limites et progressez durablement.
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
                className="relative z-10 hidden md:block pt-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={imageHeader}
                  alt="Coach sportif en action"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Credentials banner */}
        <div className="bg-cream border-t border-b border-gold/20 py-6">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gold/10 p-4 rounded-full">
                  <img
                    src={couronne}
                    alt="Couronne"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-display text-xl text-charcoal">Licence STAPS ES</h3>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gold/10 p-4 rounded-full">
                  <img
                    src={medaille}
                    alt="Médaille"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-display text-xl text-charcoal">Brevets fédéraux</h3>
                <p className="text-sm text-charcoal/70">
                  Initiateur en Force Athlétique, Haltérophilie et Remise en Forme, Cross Training
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gold/10 p-4 rounded-full">
                  <img
                    src={halteres}
                    alt="Haltère"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-display text-xl text-charcoal">Expérience</h3>
                <p className="text-sm text-charcoal/70">
                  Suivi de 30 athlètes en 1 an
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why choose section */}
        <div className="py-24 bg-white">

          {/* Google Reviews Widget */}
          <div className="bg-white ">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="elfsight-app-98499317-8025-43ae-85fe-f9c07dfd6002" data-elfsight-app-lazy></div>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-display text-center mb-16 pt-10">Pourquoi choisir Tokyo Coaching</h2>


              <div className="space-y-12">
                <motion.div
                  className="grid gap-8 md:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Une passion née dès l'enfance</h3>
                      <p className="text-charcoal/80">Le sport a toujours été une évidence. Depuis mon plus jeune âge, j'ai exploré différentes disciplines, développant ainsi une approche globale du mouvement et du bien-être.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                      alt="Enfant pratiquant le sport"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Une formation reconnue et actualisée</h3>
                      <p className="text-charcoal/80">Titulaire d'un diplôme d'État, je suis formée aux meilleures méthodes d'entraînement et continue à me perfectionner pour vous offrir des séances efficaces, adaptées aux dernières avancées scientifiques du coaching sportif.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                      alt="Diplômes et certifications"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="grid gap-8 md:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Un accompagnement sur-mesure</h3>
                      <p className="text-charcoal/80">Chaque personne est unique, et votre entraînement doit l'être aussi. Que votre objectif soit la remise en forme, la prise de muscle, la perte de poids ou l'amélioration de vos performances, j'élabore un programme personnalisé pour des résultats concrets et durables.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Coaching personnalisé"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Motivation et bienveillance</h3>
                      <p className="text-charcoal/80">Chez Tokyo Coaching, on ne parle pas de souffrance mais de dépassement de soi dans un cadre positif et encourageant. Je vous accompagne à chaque étape avec écoute, motivation et bonne humeur.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
                      alt="Encouragement et motivation"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="grid gap-8 md:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Des méthodes basées sur la science</h3>
                      <p className="text-charcoal/80">Fini les entraînements au hasard ! Ici, chaque exercice et chaque programme sont conçus en fonction de principes scientifiques éprouvés, pour optimiser vos efforts et éviter les blessures.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      alt="Analyse scientifique"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                  <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-display text-xl mb-4 text-charcoal">Un suivi régulier pour ne jamais lâcher</h3>
                      <p className="text-charcoal/80">Votre progression est au cœur de ma mission. Grâce à un suivi constant et des ajustements réguliers, vous restez motivé(e) et continuez à évoluer vers vos objectifs.</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Suivi des progrès"
                      className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-2xl opacity-20"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center px-6 py-10"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-charcoal text-cream px-6 py-3 rounded-full hover:bg-gold transition-colors duration-300"
                  >
                    <span>Alors ? On s'y met ?</span>
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
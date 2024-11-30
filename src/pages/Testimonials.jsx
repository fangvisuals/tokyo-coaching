import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';
import TestimonialForm from '../components/TestimonialForm';
import TestimonialCard from '../components/TestimonialCard';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const q = query(
        collection(db, 'testimonials'),
        where('isApproved', '==', true)
      );
      
      const querySnapshot = await getDocs(q);
      const fetchedTestimonials = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setTestimonials(fetchedTestimonials);
    };

    fetchTestimonials();
  }, []);

  const handleSubmitTestimonial = async (data) => {
    try {
      setIsSubmitting(true);
      await addDoc(collection(db, 'testimonials'), {
        ...data,
        isApproved: false,
        createdAt: serverTimestamp()
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title text-center mb-12">Ils ont choisi Tokyo Coaching</h1>
          
          {/* Section des témoignages approuvés */}
          <div className="mb-16 space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Formulaire de témoignage */}
          <div className="mb-8">
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                Merci pour votre témoignage ! Il sera visible après validation par notre équipe.
              </div>
            ) : (
              <TestimonialForm 
                onSubmit={handleSubmitTestimonial} 
                isSubmitting={isSubmitting}
              />
            )}
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};

export default Testimonials;
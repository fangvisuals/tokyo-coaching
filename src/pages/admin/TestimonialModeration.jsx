import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import StarRating from '../../components/StarRating';

const TestimonialModeration = () => {
  const [pendingTestimonials, setPendingTestimonials] = useState([]);

  useEffect(() => {
    const fetchPendingTestimonials = async () => {
      const q = query(
        collection(db, 'testimonials'),
        where('isApproved', '==', false)
      );
      
      const querySnapshot = await getDocs(q);
      const testimonials = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setPendingTestimonials(testimonials);
    };

    fetchPendingTestimonials();
  }, []);

  const handleApprove = async (testimonialId) => {
    try {
      const testimonialRef = doc(db, 'testimonials', testimonialId);
      await updateDoc(testimonialRef, {
        isApproved: true
      });
      
      // Mettre à jour l'état local
      setPendingTestimonials(current =>
        current.filter(t => t.id !== testimonialId)
      );
    } catch (error) {
      console.error('Error approving testimonial:', error);
    }
  };

  const handleReject = async (testimonialId) => {
    try {
      const testimonialRef = doc(db, 'testimonials', testimonialId);
      await updateDoc(testimonialRef, {
        isApproved: false,
        isRejected: true
      });
      
      // Mettre à jour l'état local
      setPendingTestimonials(current =>
        current.filter(t => t.id !== testimonialId)
      );
    } catch (error) {
      console.error('Error rejecting testimonial:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Modération des témoignages</h1>
      
      {pendingTestimonials.length === 0 ? (
        <p className="text-gray-600">Aucun témoignage en attente de modération.</p>
      ) : (
        <div className="space-y-6">
          {pendingTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">
                    {testimonial.firstName} {testimonial.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.email}</p>
                </div>
                <StarRating rating={testimonial.rating} readonly />
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => handleApprove(testimonial.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Approuver
                </button>
                <button
                  onClick={() => handleReject(testimonial.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Rejeter
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialModeration;
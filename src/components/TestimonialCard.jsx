import React from 'react';
import StarRating from './StarRating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {testimonial.firstName} {testimonial.lastName}
          </h3>
          <StarRating rating={testimonial.rating} readonly />
        </div>
        <span className="text-sm text-gray-500">
          {new Date(testimonial.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-600">{testimonial.comment}</p>
    </div>
  );
};

export default TestimonialCard;
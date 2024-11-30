import React from 'react';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import classNames from 'classnames';

const StarRating = ({ rating, setRating, readonly = false }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && setRating(star)}
          className={classNames(
            "focus:outline-none",
            { "cursor-pointer hover:scale-110 transition-transform": !readonly },
            { "cursor-default": readonly }
          )}
        >
          {star <= rating ? (
            <StarSolid className="h-6 w-6 text-yellow-400" />
          ) : (
            <StarOutline className="h-6 w-6 text-gray-300" />
          )}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
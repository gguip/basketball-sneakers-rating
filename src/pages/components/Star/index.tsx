import React from 'react';

interface StarProps {
  rating: number;
}
const Star = ({ rating }: StarProps) => {
  const starsArray = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <>
      {starsArray.map((_, index) => (
        <input
          key={index}
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          readOnly
          checked
        />
      ))}
    </>
  );
};

export default Star;

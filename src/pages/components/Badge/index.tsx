import React from 'react';

interface BadgeProps {
  sneakerType: string;
}

const Badge = ({ sneakerType }: BadgeProps) => {
  return <div className='badge badge-primary mt-2'>{sneakerType}</div>;
};

export default Badge;

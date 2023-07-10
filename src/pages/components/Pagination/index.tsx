import React from 'react';

const Pagination = () => {
  return (
    <div className='join'>
      <input
        className='btn-square join-item btn'
        type='radio'
        name='options'
        aria-label='1'
        checked
      />
      <input
        className='btn-square join-item btn'
        type='radio'
        name='options'
        aria-label='2'
      />
      <input
        className='btn-square join-item btn'
        type='radio'
        name='options'
        aria-label='3'
      />
      <input
        className='btn-square join-item btn'
        type='radio'
        name='options'
        aria-label='4'
      />
    </div>
  );
};

export default Pagination;

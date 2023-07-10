import React from 'react';

interface ButtonProps {
  url: string;
  text: string;
}

const Button = ({ url, text }: ButtonProps) => {
  return (
    <a href={url} target='_blank'>
      <button className='btn-primary btn'>{text}</button>
    </a>
  );
};

export default Button;

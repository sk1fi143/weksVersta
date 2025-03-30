import React from 'react';

interface Props {
className?: string;
name: string;
subtitle: string;
image: string;
}

export const CardDoctor: React.FC<Props> = ({ image, name,  subtitle }) => {
  return (
    <div className="card-doctor">
        <img src={image} className='card-doctor__img' />
        <div className='card-doctor__txt'>
            <span className='card-doctor__name'>{name}</span>
            <span className='card-doctor__subtitle'>{subtitle}</span>
        </div>
    </div>
  );
};
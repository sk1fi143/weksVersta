import React from 'react';

interface Props {
className?: string;
txtrotate: string;
image: string;
}

export const HelpCard: React.FC<Props> = ({ image, txtrotate }) => {
  return (
    <div className="help-card">
        <img src={image} className='help-card__img' alt="#"/>
        <div className='help-card__info'>
            <span className='help-card__txt'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
            <div className='help-card__buttons'>
                <button className='help-card__but1'>Braces</button>
                <button className='help-card__but2'>Invisalign</button>
            </div>
        </div>
    <div className='help-card__block-rotate'>
        <span className='help-card__rotate'>{txtrotate}</span>
    </div>
    </div>
  );
};  
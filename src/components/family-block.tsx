import React from 'react';
import Image from '../assets/images/family.png';

interface Props {
className?: string;
}

export const FamilyBlock: React.FC<Props> = () => {
  return (
    <div className="family-block" id='fam'>
        <div className='family-block__content'>
        <div className='family-block__info'>
            <div className='family-block__txt'>
                <span className='family-block__title'>Creating Beautiful Smiles Everyday</span>
                <span className='family-block__subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
            </div>
            <div className='family-block__buttons'>
                <button className='family-block__but1'>Free Consult</button>
                <button className='family-block__but2'>What We do</button>
            </div>
        </div>
        <img className='family-block__img' alt="#" src={Image}/>
        </div>
    </div>
  );
};  
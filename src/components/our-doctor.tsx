import React from 'react';
import { CardDoctor } from './card-doctor';
import Man1 from '@img/man1.png';
import Man2 from '@img/man2.png';
import Man3 from '@img/man3.png';

interface Props {
className?: string;
}

export const OurDoctor: React.FC<Props> = () => {
  return (
    <div className="our-doctor" id='doc'>
        <div className='our-doctor__txt'>
            <div className='our-doctor__exp'>
                <div className='our-doctor__line'></div>
                <span className='our-doctor__title'>OUR EXPERTS</span>
                <div className='our-doctor__line'></div>
            </div>
            <span className='our-doctor__main-title'>Meer Our Doctors</span>
            <span className='our-doctor__main-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
        </div>
        <div className='our-doctor__cards'>
            <CardDoctor image={Man1} name={"Dr. Cameron Willason"} subtitle={"DDS, PC"} />
            <CardDoctor image={Man2} name={"Dr. Shiv Shanker"} subtitle={"DDS, MS"} />
            <CardDoctor image={Man3} name={"Dr. Cameron Willason"} subtitle={"DDS, MS"} />
        </div>
        <button className='our-doctor__button'>View All Doctors</button>
    </div>
  );
};
import React from 'react';
import { HelpCard } from './help-card';
import Ch1 from '@img/ch1.png';
import Ch2 from '@img/ch2.png';
import Ch3 from '@img/ch3.png';

interface Props {
className?: string;
}

export const HelpBlock: React.FC<Props> = () => {
  return (
    <div className="help-block" id='help'>
        <div className='help-block__txt'>
            <span className='help-block__title'>Who We Help</span>
            <span className='help-block__subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
        </div>
        <div className='help-block__cards'>
            <HelpCard image={Ch1} txtrotate={'KIDS'} />
            <HelpCard image={Ch2} txtrotate={'TEENS'} />
            <HelpCard image={Ch3} txtrotate={'ADULTS'} />
        </div>
    </div>
  );
};  
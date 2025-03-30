import React from "react";
import Dots from "@img/Dots.svg?react";

interface Props {
  className?: string;
}

export const Location: React.FC<Props> = () => {
  return (
    <div className="location" id='loc'>
      <div className="location__row">
        <iframe
          className="location__row-map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A55e3e0ef7b97c6cbf2e3271637b245ab1b7de339b58e40fcb16f414e3f12e0ea&amp;source=constructor"
        ></iframe>
        <div className="location__row-info">
          <h3 className="location__row-info-title">Our Locations</h3>
          <div className="location__row-info-item">
            <span className="location__row-info-item-name">ADDRESS</span>
            <span className="location__row-info-item-value">
              4517 Washington Ave, Manchester, Kentucky 39495
            </span>
          </div>
          <div className="location__row-info-item">
            <span className="location__row-info-item-name">PHONE</span>
            <span className="location__row-info-item-value">
              513 - 808-4707
            </span>
          </div>
          <div className="location__row-info-item">
            <span className="location__row-info-item-name">OFFICE HOURS</span>
            <span className="location__row-info-item-value">8am - 9pm</span>
          </div>
        </div>
      </div>
      <div className="location__purple" />
      <div className="location__purple-small" />
      <Dots className="location__dots" />
    </div>
  );
};

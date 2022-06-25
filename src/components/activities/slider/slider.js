/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'antd';
import './slider.css';
import 'antd/dist/antd.css';
import Marketing1 from '../marketing1/marketing1';
import Marketing2 from '../marketing2/marketing2';
import Marketing3 from '../marketing3/marketing3';
import Marketing4 from '../marketing4/marketing4';

const contentStyle = {
  lineHeight: '160px',
  textAlign: 'center',

};

const MarketingSlider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="mslider">
      <Carousel afterChange={onChange}>
        <div>
          <div className="mlider">
            <Marketing1 />

          </div>
        </div>

        <div>
          <div className="mlider">
            <Marketing2 />

          </div>
        </div>

        <div>
          <div className="mlider">
            <Marketing3 />

          </div>
        </div>

        <div>
          <div className="mlider">
            <Marketing4 />

          </div>
        </div>
      </Carousel>

    </div>
  );
};

export default MarketingSlider;

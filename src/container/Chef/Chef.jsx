import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="founder" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Our Founder" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">I am forever grateful for the gift of my work. Through him, I can make impossible dreams come true.</p>
        </div>
        <p className="p__opensans">When I thought of founding a local wine and beverage market, my main focus was to somehow bring joy to people, so why not bring such happiness through taste?</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Oenologist & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

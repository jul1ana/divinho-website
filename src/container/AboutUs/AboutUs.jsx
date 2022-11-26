import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about small">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Divinho carefully obtains her wines directly from wine estates and selected private collectors. Our expert buyers have tasted the various vintages of every wine in our stock.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_wine flex__center">
        <img src={images.knife} alt="about_wine" />
      </div>

      <div className="app__aboutus-content_history small">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Divinho was founded in 1979 by experts in fine and rare wines. With over a century of experience in wine and relations with prestigious international wine estates.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;

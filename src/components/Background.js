import React from 'react';

import SlideShow from './SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg02.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const Background = () => (

    <SlideShow settings={settings} />

);

export default Background;

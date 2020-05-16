import React from 'react';

import Layout from '../components/Layout';


import pic2 from '../assets/images/2.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic2} alt="" />
            </span>
        <div className="text">
          <p>
            Modern self-taught minimalist living in Poznań, Poland - that’s how I would describe myself in a few words.
          </p>
          <p>
            My passion for an art and creativity has been growing since I was a little girl and became part of my identity. I love to create and paint. This is what gives my life its purpose and vibrance.
          </p>
          <p>
            When I'm diving into an art I'm not following any rules or guidelines. I believe in a free spirit which is why I always start painting straight on the canvas without a single sketch beforehand. That lets me express my emotions and in the end result I create an art which is authentic I believe that the art should not be too serious. You have to enjoy it and sometimes bend the rules so that you can discover something new...  and that’s what I love about it.
          </p>
          <p>
            For me the most important in my creations is to give the viewer space for contemplation. It's totally up to you how you interpret it. When you find something for yourself in one of my paintings - that's when I truly feel that I've succeeded.
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

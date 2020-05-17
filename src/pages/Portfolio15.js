import React from 'react';

import Layout from '../components/Layout';


import pic15 from '../assets/images/15.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic15} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x90
          </p>
          <p>
            Price: SOLD
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

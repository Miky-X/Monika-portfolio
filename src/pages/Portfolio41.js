import React from 'react';

import Layout from '../components/Layout';


import pic41 from '../assets/images/41.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic41} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x90
          </p>
          <p>
            Price: 800PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

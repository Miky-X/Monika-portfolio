import React from 'react';

import Layout from '../components/Layout';


import pic30 from '../assets/images/30.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic30} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x90
          </p>
          <p>
            Price: 600PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

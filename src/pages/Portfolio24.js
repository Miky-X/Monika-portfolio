import React from 'react';

import Layout from '../components/Layout';


import pic24 from '../assets/images/24.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic24} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x60
          </p>
          <p>
            Price: 400PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';


import pic31 from '../assets/images/31.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic31} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x120
          </p>
          <p>
            Price: 700PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

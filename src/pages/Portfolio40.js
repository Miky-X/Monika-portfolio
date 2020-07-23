import React from 'react';

import Layout from '../components/Layout';


import pic40 from '../assets/images/40.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic40} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x60
          </p>
          <p>
            Price: 450PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';


import pic36 from '../assets/images/36.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic36} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 30
          </p>
          <p>
            Price: 250PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

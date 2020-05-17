import React from 'react';

import Layout from '../components/Layout';


import pic22 from '../assets/images/22.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic22} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 70x40
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

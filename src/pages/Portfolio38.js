import React from 'react';

import Layout from '../components/Layout';


import pic38 from '../assets/images/38.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic38} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 50x50
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

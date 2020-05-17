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
        <div className="portfolio">
          <p>
            Size: 50x50
          </p>
          <p>
            Price: 500PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

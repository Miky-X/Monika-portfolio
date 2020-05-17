import React from 'react';

import Layout from '../components/Layout';


import pic32 from '../assets/images/32.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic32} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 50x100
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

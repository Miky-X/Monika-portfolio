import React from 'react';

import Layout from '../components/Layout';


import pic28 from '../assets/images/28.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic28} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 40x40
          </p>
          <p>
            Price: 300PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

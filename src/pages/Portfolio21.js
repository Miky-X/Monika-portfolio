import React from 'react';

import Layout from '../components/Layout';


import pic21 from '../assets/images/21.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic21} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x100
          </p>
          <p>
            Price: 900PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

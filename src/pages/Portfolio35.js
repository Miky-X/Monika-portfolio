import React from 'react';

import Layout from '../components/Layout';


import pic35 from '../assets/images/35.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic35} alt="" />
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

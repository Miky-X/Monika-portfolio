import React from 'react';

import Layout from '../components/Layout';


import pic6 from '../assets/images/6.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic6} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 45x45
          </p>
          <p>
            Price: 400PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

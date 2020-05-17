import React from 'react';

import Layout from '../components/Layout';

import pic17 from '../assets/images/17.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner2">
            <span className="image main2">
              <img src={pic17} alt="" />
            </span>
        <div className="portfolio">
          <p>
            Size: 60x50
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

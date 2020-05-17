import React from 'react';

import Layout from '../components/Layout';

import pic8 from '../assets/images/8.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner2">
            <span className="image main2">
              <img src={pic8} alt="" />
            </span>
        <div className="text2">
          <p>
            Size: 60x50
          </p>
          <p>
            Price: 700PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

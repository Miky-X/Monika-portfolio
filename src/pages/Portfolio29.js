import React from 'react';

import Layout from '../components/Layout';

import pic29 from '../assets/images/29.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner2">
            <span className="image main2">
              <img src={pic29} alt="" />
            </span>
        <div className="text2">
          <p>
            Size: 60x80
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

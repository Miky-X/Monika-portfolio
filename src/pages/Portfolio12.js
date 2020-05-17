import React from 'react';

import Layout from '../components/Layout';

import pic12 from '../assets/images/12.jpg';
import Sidebar from '../components/Sidebar';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner2">
            <span className="image main2">
              <img src={pic12} alt="" />
            </span>
        <div className="text2">
          <p>
            Size: 50x80
          </p>
          <p>
            Price: 600PLN
          </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/male.jpg';
import Sidebar from '../components/Sidebar';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <img src={pic1} alt="" />
            </span>
        <div className="text">
        <p>
          Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam, Opis jakis tam,
        </p>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

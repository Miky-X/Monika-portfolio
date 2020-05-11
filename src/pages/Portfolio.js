import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import pic1 from '../assets/images/1.jpg';
import pic2 from '../assets/images/2.jpg';
import pic3 from '../assets/images/3.jpg';
import pic4 from '../assets/images/4.jpg';
import pic5 from '../assets/images/5.jpg';
import pic6 from '../assets/images/6.jpg';
import pic7 from '../assets/images/7.jpg';
import pic8 from '../assets/images/8.jpg';
import pic9 from '../assets/images/9.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div >
      <div id="main">
        <div className="inner">
          <section className="tiles">
            <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
              <Link to="Images1">
                <div className="content">
                  <p>
                    Nazwa / 50x80
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
              <Link to="Images2">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
              <Link to="/../Content/Image3">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
              <Link to="/../Content/Image4">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
              <Link to="/../Content/Image5">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
              <Link to="/Generic">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic7} alt="" />
            </span>
              <Link to="/Generic">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic8} alt="" />
            </span>
              <Link to="/Generic">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
            <article className="style1">
            <span className="image">
              <img src={pic9} alt="" />
            </span>
              <Link to="/Generic">
                <div className="content">
                  <p>
                    Tekst po najechaniu na zdjecie
                  </p>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

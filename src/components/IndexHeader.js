import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';

export default function Footer() {
  return (
    <header id="header2">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <div className='LinkPage'>
        <div class='container red topBotomBorderOut'>
          <Link to='About'><a>About</a></Link>
          <Link to='Portfolio'><a>Portfolio</a></Link>
          <Link to='Contact'><a>Contact</a></Link>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { css } from 'emotion';

import Header from '../common/Header';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import BottomCta from './BottomCta';


const Landing = ({ locale, onLocaleChange }) => (
  <div>
    <Header
      localeValue={locale}
      onLocaleChange={onLocaleChange}
      className={css({
        backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
        color: 'white',
      })}
    />
    <Main />
    <Features />
    <BottomCta />
    <Footer />
  </div>
);

export default Landing;

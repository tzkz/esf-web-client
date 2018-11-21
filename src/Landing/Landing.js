import React from 'react';
import { css } from 'emotion';

import Header from '../common/Header';
import Main from './Main';
import Footer from './Footer';

const container = {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const Landing = ({ locale, onLocaleChange }) => (
  <div
    className={css(container)}
  >
    <Header
      localeValue={locale}
      onLocaleChange={onLocaleChange}
      className={css({
        backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
        color: 'white',
      })}
    />
    <Main />
    <Footer />
  </div>
);

export default Landing;

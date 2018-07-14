import React from 'react';
import { css } from 'emotion';
import { FormattedMessage } from 'react-intl';

import SectionContent from '../common/SectionContent';
import LoginInitial from './LoginInitial';

const bottomCta = {
  backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
};

const bottomCtaInner = {
  maxWidth: '28em',
  padding: '3em 0',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const title = {
  color: 'white',
  fontSize: '24px',
  textAlign: 'center',
  margin: '0 0 1em'
};

const BottomCta = () => (
  <section className={css(bottomCta)}>
    <SectionContent>
      <div className={css(bottomCtaInner)}>
        <div className={css(title)}>
          <FormattedMessage
            id="BottomCta.Title"
            defaultMessage="Try out today"
          />
        </div>
        <LoginInitial />
      </div>
    </SectionContent>
  </section>
);

export default BottomCta;

import React from 'react';

import SectionContent from '../common/SectionContent';
import LoginInitial from './LoginInitial';

import './BottomCta.css';

const BottomCta = () => (
  <section className="bottomCta">
    <SectionContent>
      <div className="bottomCtaInner">
        <LoginInitial />
      </div>
    </SectionContent>
  </section>
);

export default BottomCta;

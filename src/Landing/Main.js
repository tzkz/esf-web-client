import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Main.css';
import SectionContent from '../common/SectionContent';
import LoginInitial from './LoginInitial';

const Main = ({ onDemoClick }) => (
  <section className="main">
    <SectionContent>
      <div className="main-inner">
        <div className="description">
          <div className="description-title">
            <FormattedMessage
              id="Main.Headline"
              defaultMessage="Export ESF invoices with ease"
            />
          </div>
          <div className="description-body">
            <FormattedMessage
              id="Main.Subheadline"
              defaultMessage="Get what the official app is missing absolutely FREE"
            />
          </div>
        </div>
        <div className="login-area">
          <LoginInitial onDemoClick={onDemoClick} />
        </div>
      </div>
    </SectionContent>
  </section>
);

export default Main;

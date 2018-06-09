import React from 'react';
import { FormattedMessage } from 'react-intl';

import SectionContent from '../common/SectionContent';
import lock from './lock.png';
import doc from './doc.png';
import bank from './bank.png';

import './Features.css';

const Features = () => (
  <section>
    <SectionContent>
      <div className="features-inner">
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={lock} alt="lock" />
          </div>
          <div className="feature-text-header">
            <FormattedMessage
              id="Features.FeatureOneTitle"
              defaultMessage="We do not store your data"
            />
          </div>
          <div className="feature-text">
            <FormattedMessage
              id="Features.FeatureOneBody"
              defaultMessage="We do not store your information. No logging of your activity. End-to-end encryption"
            />
          </div>
        </div>
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={doc} alt="doc" />
          </div>  
          <div className="feature-text-header">
            <FormattedMessage
              id="Features.FeatureTwoTitle"
              defaultMessage="Your favorite format"
            />
          </div>
          <div className="feature-text">
            <FormattedMessage
              id="Features.FeatureTwoBody"
              defaultMessage="Export to PDF is availabe. More formats are coming soon"
            />
          </div>
        </div>
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={bank} alt="bank" />
          </div>
          <div className="feature-text-header">
            <FormattedMessage
              id="Features.FeatureThreeTitle"
              defaultMessage="Original form structure"
            />
          </div>
          <div className="feature-text">
            <FormattedMessage
              id="Features.FeatureThreeBody"
              defaultMessage="Print form structure complies with official ESF rules"
            />
          </div>
        </div>
      </div>
    </SectionContent>
  </section>
);

export default Features;

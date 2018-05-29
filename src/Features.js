import React from 'react';

import SectionContent from './SectionContent';
import './Features.css';
import lock from './lock.png';
import doc from './doc.png';
import bank from './bank.png';

const Features = () => (
  <section>
    <SectionContent>
      <div className="features-inner">
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={lock} alt="lock" />
          </div>
          <div className="feature-text-header">We do not store your data</div>
          <div className="feature-text">
            We do not store your information
            No logging of your activity. End-to-end encryption
          </div>
        </div>
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={doc} alt="doc" />
          </div>  
          <div className="feature-text-header">Your favorite format</div>
          <div className="feature-text">
            Export to PDF is availabe
            More formats are coming soon
          </div>
        </div>
        <div className="feature">
          <div className="feature-image-container">
            <img className="image" src={bank} alt="bank" />
          </div>
          <div className="feature-text-header">Original form structure</div>
          <div className="feature-text">
            Print form structure complies
            with official ESF rules
          </div>
        </div>
      </div>
    </SectionContent>
  </section>
);

export default Features;

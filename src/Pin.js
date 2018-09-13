import React from 'react';
import { css } from 'emotion';

const container = {
  backgroundColor: '#ffffff',
}

const Pin = () => (
  <div className={css(container)}>
    <div>
      <div>
        Enter Certificate Pin
      </div>
      <div>
        Enter "Qwerty12" for demo
      </div>
      <div>
        <input type="text" placeholder="Pin"/>
      </div>
      <div>
        Required
      </div>
    </div>
    <div>
      <button>
        Cancel
      </button>
      <button>
        Continue
      </button>
    </div>
  </div>
);

export default Pin;

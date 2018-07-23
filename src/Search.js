import React from 'react';
import { css } from 'emotion';

import SectionContent from './common/SectionContent';
import TextInput from './common/TextInput';

const container = {
  backgroundColor: '#f8f8f8',
  paddingTop: '17px',
};

const inputRow = {
  display: 'flex',
  padding: '5px 12px',
};

const dateInput = {
  flex: '0 1 50%',
};

const dateFrom = {
  marginRight: '3px',
};

const dateTo = {
  marginLeft: '3px',
};

const largeInput = {
  flex: '1',
};

const radioInput = {
  display: 'none',
  ':checked + label': {
    backgroundColor: '#327dd0',
    borderRadius: '5px',
    color: ' #ffffff',
  } 
};

const radioContainer = {
  display: 'flex',
  flex: '1',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  height: '40px',
  padding: '3px'
};

const radioItem = {
  flex: '1',
  display: 'flex',
}

const radioLabel = {
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#bbbbbb',
}

const invoiceTypeFonts = {
  fontSize: '12px',
}

const checkboxRow = {
  padding: '5px 12px',
}

const checkboxContainer1 = {
  display: 'flex',
  backgroundColor: '#ffffff',
  borderRadius: '5px 5px 0px 0px',
}

const checkboxContainer2 = {
  display: 'flex',
  backgroundColor: '#ffffff',
  borderRadius: '0px 0px 5px 5px',
}

const checkboxItem = {
  display: 'flex',
  flex: '1',
  height: '40px',
}

const checkboxInput = {
  display: 'none',
  ':checked + label': {
    backgroundColor: '#327dd0',
    color: ' #ffffff',
  } 
}

const checkboxLabel = {
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bbbbbb',
}

const created = {
  borderRadius: '5px 0px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderRight: 'solid 1px #f8f8f8',
}

const createdChecked = {
  ':checked + label': {
    borderBottom: 'solid 1px #0767d0',
    borderRight: 'solid 1px #0767d0',
  }
}

const delivered = {
  borderRadius: '0px 5px 0px 0px',
  borderBottom: 'solid 1px #f8f8f8',
  borderLeft: 'solid 1px #fcfcfc',
}

const deliveredChecked = {
  ':checked + label': {
    borderBottom: 'solid 1px #0767d0',
    borderLeft: 'solid 1px #528dce',
  }
}

const revoked = {
  borderRadius: '0px 0px 0px 5px',
  borderTop: 'solid 1px #fcfcfc',
  borderRight: 'solid 1px #f8f8f8',
}

const revokedChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #528dce',
    borderRight: 'solid 1px #0767d0',
  }
}

const cancelled = {
  borderRadius: '0px 0px 5px 0px',
  borderTop: 'solid 1px #fcfcfc',
  borderLeft: 'solid 1px #fcfcfc',
}

const cancelledChecked = {
  ':checked + label': {
    borderTop: 'solid 1px #528dce',
    borderLeft: 'solid 1px #528dce',
  }
}

const Search = () => (
  <div className={css(container)}>
    <SectionContent>
      <div className={css(inputRow)}>
        <TextInput className={css(dateInput, dateFrom)} placeholder="Date from…" />
        <TextInput className={css(dateInput, dateTo)} placeholder="Date to…" />
      </div>
      <div className={css(inputRow)}>
        <TextInput className={css(largeInput)} placeholder="Reg number" />
      </div> 
      <div className={css(inputRow)}>
        <div className={css(radioContainer)}>
          <div className={css(radioItem)}>
            <input type="radio" name="choose1" id="inbound" className={css(radioInput)}/>
            <label htmlFor="inbound" className={css(radioLabel)}>Inbound</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose1" id="outbound" className={css(radioInput)}/>
            <label htmlFor="outbound" className={css(radioLabel)}>Outbound</label>
          </div>
        </div>  
      </div>
      <div className={css(inputRow)}>
        <TextInput className={css(largeInput)} placeholder="Customer/supplier BIN" />
      </div>
      <div className={css(checkboxRow)}>
        <div className={css(checkboxContainer1)}>
          <div className={css(checkboxItem)}>
            <input type="checkbox" id="created" className={css(checkboxInput, createdChecked)}/>
            <label htmlFor="created" className={css(checkboxLabel, created)}>Created</label>
          </div>  
          <div className={css(checkboxItem)}>
            <input type="checkbox" id="delivered" className={css(checkboxInput, deliveredChecked)}/>
            <label htmlFor="delivered" className={css(checkboxLabel, delivered)}>Delivered</label>
          </div>
        </div>  
        <div className={css(checkboxContainer2)}>
          <div className={css(checkboxItem)}>
            <input type="checkbox" id="revoked" className={css(checkboxInput, revokedChecked)}/>
            <label htmlFor="revoked" className={css(checkboxLabel, revoked)}>Revoked</label>
          </div> 
          <div className={css(checkboxItem)}>
            <input type="checkbox" id="cancelled" className={css(checkboxInput, cancelledChecked)}/>
            <label htmlFor="cancelled" className={css(checkboxLabel, cancelled)}>Cancelled</label>
          </div>
        </div>  
      </div>
      <div className={css(inputRow)}>
        <div className={css(radioContainer)}>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="any" className={css(radioInput)}/>
            <label htmlFor="any" className={css(radioLabel, invoiceTypeFonts)}>Any</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="ordinary" className={css(radioInput)}/>
            <label htmlFor="ordinary" className={css(radioLabel, invoiceTypeFonts)}>Ordinary</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="corrected" className={css(radioInput)}/>
            <label htmlFor="corrected" className={css(radioLabel, invoiceTypeFonts)}>Corrected</label>
          </div>
          <div className={css(radioItem)}>
            <input type="radio" name="choose2" id="additional" className={css(radioInput)}/>
            <label htmlFor="additional" className={css(radioLabel, invoiceTypeFonts)}>Additional</label>
          </div>
        </div>  
      </div>
    </SectionContent>
  </div>
);

export default Search;

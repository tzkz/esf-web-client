import React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { isEmpty } from 'lodash';
import Alert from 'react-s-alert';

import SectionContent from './common/SectionContent';
import PrivateComponent from './common/PrivateComponent';
import { apiCall } from './apiUtils';
import { SET_SEARCH_RESULT } from './store';
import Header from './common/Header';
import Spinner from './common/Spinner';
import Checkbox from './common/Checkbox';


const container = {
}

const innerContainer = {
  display: 'flex',
  fontSize: '12px',
  justifyContent: 'center',
  marginTop: '2px',
  '@media(min-width: 400px)': {
    paddingTop: '17px',
  }
}

const sidebarContainer = {
  display: 'none',
  '@media(min-width: 768px)': {
    display: 'block',
    backgroundColor: 'transparent',
    flexBasis: '150px',
    marginTop: '20px',
  }
}

const sidebarItems = {
  color: '#262626',
  padding: '0px 15px',
  fontSize: '16px',
  fontWeight: '600',
  backgroundColor: 'transparent',
  borderRadius: '5px 0px 0px 5px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
}

const sidebarItemActive = {
  backgroundColor: '#f8f8f8',
}

const wrapperContainer = {
  backgroundColor: '#f8f8f8',
  flexGrow: '1',
  borderRadius: '5px',
}

const resultsContainer = {
  backgroundColor: '#ffffff',
  flexGrow: '1',
  borderRadius: '5px',
  margin: '15px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
  '@media(min-width: 400px)': {
    margin: '30px',
  }
}

const headerContainer = {
  display: 'flex',
  paddingLeft: '16px',
  paddingRight: '16px',
  height: '48px',
  alignItems: 'center',
  borderBottom: 'solid 1px #dadce0',
  justifyContent: 'space-between',
}

const tableTitleContainer = {
  ...headerContainer,
  height: '64px',
  padding: '0 16px',
  fontSize: '20px',
}

const itemContainer = {
  ...headerContainer,
  ':hover': {
    cursor: 'pointer',
  },
}

const regNumber = {
  flexGrow: '1',
  marginLeft: '12px',
}

const status = {
  marginLeft: '12px',
}

const downloadButton = {
  background: 'none',
  border: 'none',
  outline: 'none',
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: '14px',
  textTransform: 'uppercase',
  padding: '10px 8px',
  ':hover': {
    cursor: 'pointer',
  }
}

const getIvoiceIds = (searchResult) => {
  const getInvoiceId = (item) => item.invoiceId

  return searchResult.invoiceInfoList && searchResult.invoiceInfoList.invoiceInfo &&
    searchResult.invoiceInfoList.invoiceInfo.map(getInvoiceId)
}

class Result extends React.Component {
  state = {
    isLoading: false,
    selectAllChecked: false,
    selected: [],
  }

  componentDidMount() {
    const { sessionId, location: { search } } = this.props;

    if (search) {
      this.fetchInvoices({ search, sessionId })
    }
  }

  fetchInvoices = ({ search, sessionId }) => {
    const options = {
      headers: {
        'Session-ID': sessionId,
      }
    }

    this.setState({ isLoading: true })

    return apiCall(`/invoices/queryinvoice${search}`, options)
      .then(this.setSearchResult)
      .catch(this.onFetchFail)
      .finally(() => this.setState({ isLoading: false }))
  }

  setSearchResult = (searchResult) => (
    this.props.dispatch({ type: SET_SEARCH_RESULT, searchResult })
  )

  onFetchFail = (error) => {
    if (error.name === 'ApiError') {
      return this.handleApiError(error)
    }
    return this.handleUnknownError(error)
  }

  onItemClick = (event, item) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(item.invoiceId)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, item.invoiceId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected })
  }

  onSelectAllChange = (event) => {
    const checked = event.target.checked
    const { searchResult } = this.props
    this.setState({
      selectAllChecked: checked,
      selected: checked ? getIvoiceIds(searchResult) : []
    })
  }

  onDowloadClick = () => {
    Alert.info('Download!')
  }

  handleApiError = (error) => {
    Alert.info(error.body.soapError.faultstring)
  }

  handleUnknownError = (error) => {
    if (error.response) {
      return Alert.info(`${error.response.status} ${error.response.statusText}`)
    }
    return Alert.info(`${error.name}: ${error.message}`)
  }

  render() {
    const { selected } = this.state
    const { searchResult, locale, onLocaleChange, onMenuClick } = this.props

    return (
      <PrivateComponent>
        <div className={css(container)}>
          <Header
            localeValue={locale}
            onLocaleChange={onLocaleChange}
            burgerClassName={css({ fill: '#697EFF' })}
            onMenuClick={onMenuClick}
          />
          <SectionContent>
            <div className={css(innerContainer)}>
              <div className={css(sidebarContainer)}>
                <div className={css(sidebarItems)}>
                  Search
                </div>
                <div className={css(sidebarItems, sidebarItemActive)}>
                  Result
                </div>
              </div>
              <div className={css(wrapperContainer)}>
                {this.state.isLoading &&
                  <Spinner
                    size={12}
                    color="#697EFF"
                    className={css({ margin: '24px 0' })}
                  />
                }
                {!isEmpty(searchResult) && !this.state.isLoading &&
                  <div className={css(resultsContainer)}>
                    <div
                      className={
                        css(
                          tableTitleContainer,
                          !isEmpty(selected) && {
                            color: '#697EFF',
                            background: '#E3E7FF',
                            fontSize: '16px',
                          }
                        )
                      }
                    >
                      {isEmpty(selected) &&
                        <span>Invoices</span>
                      }
                      {!isEmpty(selected) &&
                        <span>{selected.length} selected</span>
                      }
                      {!isEmpty(selected) &&
                        <button
                          className={css(downloadButton)}
                          onClick={this.onDowloadClick}
                        >
                          Download
                        </button>
                      }
                    </div>
                    <div className={css(headerContainer)}>
                      <Checkbox
                        id="selectAllCheckbox"
                        checked={this.state.selectAllChecked}
                        onChange={this.onSelectAllChange}
                      />
                      <div className={css(regNumber)}>
                        Reg number
                      </div>
                      <div className={css(status)}>
                        Status
                      </div>
                    </div>
                    {searchResult.invoiceInfoList && searchResult.invoiceInfoList.invoiceInfo &&
                      searchResult.invoiceInfoList.invoiceInfo.map((item) => (
                        <div
                          className={
                            css(itemContainer, this.state.selected.indexOf(item.invoiceId) > -1 && { background: '#F5F5F5' })
                          }
                          key={item.invoiceId}
                          onClick={(event) => this.onItemClick(event, item)}
                        >
                          <Checkbox
                            id={`checkbox-${item.invoiceId}`}
                            checked={this.state.selected.indexOf(item.invoiceId) > -1}
                            onClick={(event) => event.stopPropagation()}
                          />
                          <div className={css(regNumber)}>
                            {item.registrationNumber}
                          </div>
                          <div className={css(status)}>
                            {item.invoiceStatus}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                }
              </div>
            </div>
          </SectionContent>
        </div>
      </PrivateComponent>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
  sessionId: state.sessionId,
})

export default connect(mapStateToProps)(Result);

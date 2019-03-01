import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'emotion'
import { isEmpty } from 'lodash'
import Alert from 'react-s-alert'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

import SectionContent from './common/SectionContent'
import PrivateComponent from './common/PrivateComponent'
import { apiCall } from './apiUtils'
import { SET_SEARCH_RESULT } from './store'
import Spinner from './common/Spinner'
import Checkbox from './common/Checkbox'

const innerContainer = {
  display: 'flex',
  fontSize: '12px',
  justifyContent: 'center',
  marginTop: '2px',
  '@media(min-width: 400px)': {
    paddingTop: '17px',
  },
}

const wrapperContainer = {
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
  },
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
  },
}

const getIvoiceIds = (searchResult) => {
  const getInvoiceId = item => item.invoiceId

  return searchResult.invoiceInfoList && searchResult.invoiceInfoList.invoiceInfo
    && searchResult.invoiceInfoList.invoiceInfo.map(getInvoiceId)
}

const fetchPdf = (item) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(item),
  }

  return apiCall('/pdfs', options)
    .then(result => ({ ...result, invoiceId: item.invoiceId }))
}

const fetchPdfs = ({ selected, invoiceInfo }) => {
  const selectedInvoices = invoiceInfo.filter(item => selected.includes(item.invoiceId))

  return Promise.all(selectedInvoices.map(fetchPdf))
}

export const generateZip = (pdfs) => {
  const zip = new JSZip()

  for (let i = 0; i < pdfs.length; i++) {
    zip.file(`${pdfs[i].invoiceId}.pdf`, pdfs[i].pdfBase64, { base64: true })
  }

  return zip.generateAsync({ type: 'blob' })
}

class Result extends React.Component {
  state = {
    isLoading: false,
    isDownloading: false,
    selectAllChecked: false,
    selected: [],
  }

  componentDidMount() {
    const { sessionId, location: { search } } = this.props

    if (search) {
      this.fetchInvoices({ search, sessionId })
    }
  }

  fetchInvoices = ({ search, sessionId }) => {
    const options = {
      headers: {
        'Session-ID': sessionId,
      },
    }

    this.setState({ isLoading: true })

    return apiCall(`/invoices/queryinvoice${search}`, options)
      .then(this.setSearchResult)
      .catch(this.onFetchFail)
      .finally(() => this.setState({ isLoading: false }))
  }

  setSearchResult = (searchResult) => {
    const { dispatch } = this.props

    dispatch({ type: SET_SEARCH_RESULT, searchResult })
  }

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
      newSelected = newSelected.concat(selected, item.invoiceId)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    this.setState({ selected: newSelected })
  }

  onSelectAllChange = (event) => {
    const { checked } = event.target
    const { searchResult } = this.props
    this.setState({
      selectAllChecked: checked,
      selected: checked ? getIvoiceIds(searchResult) : [],
    })
  }

  onDowloadClick = () => {
    const { selected } = this.state
    const { searchResult: { invoiceInfoList: { invoiceInfo } } } = this.props

    this.setState({ isDownloading: true })

    return fetchPdfs({ selected, invoiceInfo })
      .then(generateZip)
      .then(blob => saveAs(blob, `invoices-${Date.now()}`))
      .catch(this.handleUnknownError)
      .finally(() => this.setState({ isDownloading: false }))
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
    const {
      selected, isLoading, isDownloading, selectAllChecked,
    } = this.state
    const { searchResult } = this.props

    return (
      <PrivateComponent>
        <div>
          <SectionContent>
            <div className={css(innerContainer)}>
              <div className={css(wrapperContainer)}>
                {isLoading
                  && <Spinner size={12} className={css({ margin: '24px 0' })} />
                }
                {!isEmpty(searchResult) && !isLoading
                  && (
                  <div className={css(resultsContainer)}>
                    <div
                      className={
                        css(
                          tableTitleContainer,
                          !isEmpty(selected) && {
                            color: '#697EFF',
                            background: '#E3E7FF',
                            fontSize: '16px',
                          },
                        )
                      }
                    >
                      {isEmpty(selected)
                        && <span>Invoices</span>
                      }
                      {!isEmpty(selected)
                        && (
                        <span>
                          {`${selected.length} selected`}
                        </span>
                        )
                      }
                      {!isEmpty(selected)
                        && (
                        <button
                          className={css(downloadButton)}
                          onClick={this.onDowloadClick}
                          disabled={isDownloading}
                        >
                          {isDownloading
                            ? <Spinner size={12} />
                            : <span>Download</span>
                          }
                        </button>
                        )
                      }
                    </div>
                    <div className={css(headerContainer)}>
                      <Checkbox
                        id="selectAllCheckbox"
                        checked={selectAllChecked}
                        onChange={this.onSelectAllChange}
                      />
                      <div className={css(regNumber)}>
                        Reg number
                      </div>
                      <div className={css(status)}>
                        Status
                      </div>
                    </div>
                    {searchResult.invoiceInfoList && searchResult.invoiceInfoList.invoiceInfo
                      && searchResult.invoiceInfoList.invoiceInfo.map(item => (
                        <div
                          className={
                            css(itemContainer, selected.indexOf(item.invoiceId) > -1 && { background: '#F5F5F5' })
                          }
                          key={item.invoiceId}
                          onClick={event => this.onItemClick(event, item)}
                        >
                          <Checkbox
                            id={`checkbox-${item.invoiceId}`}
                            checked={selected.indexOf(item.invoiceId) > -1}
                            onClick={event => event.stopPropagation()}
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
                  )
                }
              </div>
            </div>
          </SectionContent>
        </div>
      </PrivateComponent>
    )
  }
}

Result.propTypes = {
  searchResult: PropTypes.shape({
    invoiceInfoList: PropTypes.shape({
      invoiceInfo: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
  sessionId: PropTypes.string.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  searchResult: state.searchResult,
  sessionId: state.sessionId,
})

export default connect(mapStateToProps)(Result)

import React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { isEmpty } from 'lodash';
import Alert from 'react-s-alert';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

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

const fetchPdf = (item) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(item),
  }

  return apiCall('/pdfs', options)
    .then((result) => ({ ...result, invoiceId: item.invoiceId }))
}

const fetchPdfs = ({ selected, invoiceInfo }) => {
  const selectedInvoices = invoiceInfo.filter((item) => {
    return selected.includes(item.invoiceId)
  })

  return Promise.all(selectedInvoices.map(fetchPdf))
}

const generateZip = (pdfs) => {
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
    const { sessionId, location: { search } } = this.props;

    if (sessionId === 'demo') {
      return this.setSearchResult(demoResult)
    }

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
    const { selected } = this.state
    const { searchResult: { invoiceInfoList: { invoiceInfo }} } = this.props

    this.setState({ isDownloading: true })

    return fetchPdfs({ selected, invoiceInfo })
      .then(generateZip)
      .then((blob) => saveAs(blob, `invoices-${Date.now()}`))
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
              <div className={css(wrapperContainer)}>
                {this.state.isLoading &&
                  <Spinner size={12} className={css({ margin: '24px 0' })} />
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
                          disabled={this.state.isDownloading}
                        >
                          {this.state.isDownloading ?
                            <Spinner size={12} /> :
                            <span>Download</span>
                          }
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

const demoResult = {
  lastBlock: true,
  currPage: 0,
  rsCount: 1,
  invoiceInfoList: {
    invoiceInfo: [
      {
        invoiceBody: '',
        invoiceId: '20154965713895424',
        registrationNumber: 'ESF-012345678911-20190214-53882242',
        inputDate: '2019-02-14T08:58:02.223Z',
        lastUpdateDate: '2019-02-14T08:58:02.312Z',
        signatureValid: true,
        invoiceStatus: 'CREATED',
        version: 'InvoiceV2',
        signature: 'MIIGZTCCBE2gAwIBAgIUFX1cSXpU/SdXs4r74PS8YFuVbAowDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCS1oxQzBBBgNVBAMMOtKw0JvQotCi0KvSmiDQmtCj05jQm9CQ0J3QlNCr0KDQo9Co0Ksg0J7QoNCi0JDQm9Cr0pogKFJTQSkwHhcNMTgwODIyMTIxMTM2WhcNMTkwODIyMTIxMTM2WjCBpzEeMBwGA1UEAwwV0KLQldCh0KLQntCSINCi0JXQodCiMRUwEwYDVQQEDAzQotCV0KHQotCe0JIxGDAWBgNVBAUTD0lJTjEyMzQ1Njc4OTAxMTELMAkG==',
        signatureType: 'COMPANY',
        certificate: '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',
        kogd: '0001',
        invoice: {
          TYPE_NAME: 'PO.InvoiceV2',
          date: '14.02.2019',
          invoiceType: 'ORDINARY_INVOICE',
          num: '0001',
          operatorFullname: 'JANE SMITH',
          turnoverDate: '14.02.2019',
          consignee: {
            TYPE_NAME: 'PO.Consignee',
            countryCode: 'KZ'
          },
          customers: {
            TYPE_NAME: 'PO.InvoiceV2.Customers',
            customer: [
              {
                TYPE_NAME: 'PO.Customer',
                address: 'Казахстан, Алматинская обл., г. Алматы,',
                countryCode: 'KZ',
                name: 'John Doe',
                tin: '112233445566'
              }
            ]
          },
          deliveryTerm: {
            TYPE_NAME: 'PO.DeliveryTerm',
            hasContract: false
          },
          productSet: {
            TYPE_NAME: 'PO.ProductSet',
            currencyCode: 'KZT',
            products: {
              TYPE_NAME: 'PO.ProductSet.Products',
              product: [
                {
                  TYPE_NAME: 'PO.Product',
                  catalogTruId: '1',
                  description: 'Stuff',
                  ndsAmount: 0,
                  priceWithTax: 100,
                  priceWithoutTax: 100,
                  quantity: 1,
                  truOriginCode: '4',
                  turnoverSize: 100,
                  unitNomenclature: '796',
                  unitPrice: 100
                }
              ]
            },
            totalExciseAmount: 0,
            totalNdsAmount: 0,
            totalPriceWithTax: 100,
            totalPriceWithoutTax: 100,
            totalTurnoverSize: 100
          },
          sellers: {
            TYPE_NAME: 'PO.InvoiceV2.Sellers',
            seller: [
              {
                TYPE_NAME: 'PO.Seller',
                address: 'Казахстан, Алматинская обл., г. Алматы',
                name: 'JANE SMITH',
                tin: '0123456789011'
              }
            ]
          }
        }
      }
    ]
  }
}
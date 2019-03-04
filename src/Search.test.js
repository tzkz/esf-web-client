import moment from 'moment'
import { createQueryString } from './Search'

describe('createQueryString()', () => {
  it('generates query string based on form object', () => {
    const form = {
      direction: 'INBOUND',
      startDate: moment('2018-12-01'),
      endDate: moment('2018-12-31'),
      created: true,
      delivered: true,
      revoked: false,
      cancelled: false,
      invoiceType: 'ORDINARY_INVOICE',
    }

    expect(createQueryString(form))
      .toEqual(
        '?direction=INBOUND&dateFrom=2018-12-01&dateTo=2018-12-31&statuses[]=CREATED&statuses[]=DELIVERED&invoiceType=ORDINARY_INVOICE',
      )
  })
})

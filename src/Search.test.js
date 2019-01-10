import moment from 'moment'
import { createQueryString } from './Search'

describe('createQueryString()', () => {
  it('generates query string based on form object', () => {
    const form = {
      direction: 'INBOUND',
      startDate: moment('2018-12-01'),
      endDate: moment('2018-12-31'),
    }

    expect(createQueryString(form)).toEqual('?direction=INBOUND&dateFrom=2018-12-01&dateTo=2018-12-31')
  })
})
import { generateZip } from './Result';

describe('generateZip()', () => {
  it('resolves to a Blob', () => generateZip([])
    .then((content) => {
      expect(content instanceof Blob).toEqual(true)
    }))
})

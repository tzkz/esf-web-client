import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'react-dates/initialize'

configure({ adapter: new Adapter() })

// window.matchMedia() mock for react-media
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  })),
})

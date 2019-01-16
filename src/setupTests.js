import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// window.matchMedia() mock for react-media
Object.defineProperty(window, "matchMedia", {
  value: jest.fn(() => {
    return {
      matches : false,
      addListener : () => {},
      removeListener: () => {},
    };
  })
});

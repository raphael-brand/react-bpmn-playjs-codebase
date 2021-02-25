import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import './setupTests';

import App from '../App';
import Frameworks from 'frameworks';

describe('App', () => {
    it('doesnt crash the app')
    const app = mount(<App />);
});
import React from "react";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
import FrameworksPage from './components/FrameworksPage';

Enzyme.configure({adapter: new Adapter()});


it('renders without crashing', () => {
    let app = shallow(<FrameworksPage/>)
});
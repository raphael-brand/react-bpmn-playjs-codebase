import React from "react";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ResultList from './../components/ResultList';
import items from './../components/items'
Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    
    let app = shallow(<ResultList items={items} />);
});
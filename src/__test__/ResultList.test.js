import React from "react";

import Enzyme, {shallow, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ResultList from './../components/ResultList';
import items from './../components/items'
Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    
    let app = shallow(<ResultList items={items} filter={""}/>);
});


it('creates an array from a search result', () => {

		let filter = "";

		let resultList = render(<><ResultList items={items} filter={filter}  /></>);

		filter = "React";



})

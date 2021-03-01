import React from "react";

import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FrameworksPage from './../components/FrameworksPage'
import PageComponent from './../components/PageComponent'
import SearchInput from './../components/SearchInput'
import ResultList from './../components/ResultList'

import items from './../pages/items';

Enzyme.configure({adapter: new Adapter()});

/*it('renders without crashing', () => {

    let app = render(<FrameworksPage />);
});
*/
it('loads the array into the page component', () => {
	let app = render(
		<PageComponent title="Frameworks">
        	  <SearchInput />
        	  <ResultList items={items} />
    		</PageComponent>
	);
});

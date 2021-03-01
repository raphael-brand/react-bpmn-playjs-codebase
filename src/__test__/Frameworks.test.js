import React from "react";

import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FrameworksPage from './../components/FrameworksPage'
Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {

    let app = render(<FrameworksPage />);
});
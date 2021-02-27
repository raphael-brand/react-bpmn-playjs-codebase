import React from "react";
import PageComponent from './PageComponent';
import {SearchInput} from './SearchInput';
import ResultList from './ResultList';
import items from './../pages/items';

const FrameworksPage = () => {
    return (
    <PageComponent title="Frameworks">
        <SearchInput />
        <ResultList items={items} />
    </PageComponent>
    );
}

export default FrameworksPage;
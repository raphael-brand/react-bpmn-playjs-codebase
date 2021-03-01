import React from 'react';
import PropTypes from "prop-types";
import ResultListItem from "./ResultListItem";

const ResultList = (props) => {
    let result = [];
    const input = props.items;
    input.forEach((ds) => {
        let _data = { 
            name: Object.keys(ds),
            text: Object.values(ds)
        }
        result.push(<ResultListItem
            name={_data.name}
            text={_data.text}
        />);
        
    });
    return result;
}

export default ResultList;

ResultList.propTypes = {
    items: PropTypes.array.isRequired
};

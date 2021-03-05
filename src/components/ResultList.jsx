import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import ResultListItem from "./ResultListItem";

const ResultList = (props) => {


  let result = [];
  const { filter, items } = props;
  let filteredItems = filter == '' ? items : [];

  useEffect(() => {

	  filteredItems = items.find(

		  (values, keys) => {

		  let result = Object.keys(values)[0].match(filter);

		  // found match
		  let name = result && result.input
		  result =  Object.values(values)[0].match(filter)
		  let text = result && result.input
		  return name || text
		  });

	  }, [filter]);

	  filteredItems.forEach((ds) => {

		let _data = { 
			name: Object.keys(ds),
			text: Object.values(ds)
		}

		result.push(
		  <ResultListItem
			name={_data.name}
			text={_data.text}
		  />
		);

	  });

	  return result;

}

export default ResultList;



ResultList.propTypes = {
		items: PropTypes.array.isRequired,
		filter: PropTypes.string.isRequired
};


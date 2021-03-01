import PropTypes from "prop-types";

const ResultList = (props) => {
    let result = [];
    const input = props.items;
    input.forEach((ds) => {
        let _data = { 
            name: Object.keys(ds),
            text: Object.values(ds)
        }
        
        result.push(_data);
    });
    return result;
}

export default ResultList;

ResultList.propTypes = {
    items: PropTypes.array.isRequired
};

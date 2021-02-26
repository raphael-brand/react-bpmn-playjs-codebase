import React from "react";

const ResultList = (props) => {
    
     const result = [];
     
const input = {1:"John",2:"Josh"};
const output = Object.keys(input).map((key) => {
  return {
    Number: key,
    Name: input[key]
  }
});     return output;
     
}

export default ResultList;
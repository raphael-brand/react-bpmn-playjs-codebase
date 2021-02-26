import React from "react";
const PageComponent = (props) => {
    
    return (
        <>
      <h1>{props.title}</h1>
      {props.content}
      </>
    );
}

export default PageComponent;
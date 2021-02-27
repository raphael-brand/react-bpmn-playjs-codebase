import React from "react";
cgit onst PageComponent = (props) => {
    
    return (
        <>
      <h1>{props.title}</h1>
      {props.children}
      </>
    );
}

export default PageComponent;
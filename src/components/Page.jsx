// export a navigation component
import React from 'react';

import { useParams } from 'react-router-dom';

const Page = () => {
  
  const { pagename } = useParams();  
  return `<h1>ID: {pagename}</h1>`;

}
let exports = {Page, useParams};
export default exports;
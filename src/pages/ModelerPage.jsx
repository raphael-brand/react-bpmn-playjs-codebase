import BpmnJs from "bpmn-js/dist/bpmn-modeler.development.js";

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

// export a modeler page component
// use the modeler to instantiate a modeler instanceof

const ModelerPage = () => {
  
  const element = new BpmnJs();
  // We can call useParams() here to get the params,
  // or in any child element as well!
 // ...
 return '<h1>Modeler</h1>';
}

export default ModelerPage;

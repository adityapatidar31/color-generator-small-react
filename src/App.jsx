import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
function App() {
  const [colors, setColors] = useState([new Values("#f15025").all(10)]);

  return (
    <div>
      <Form />
      <ColorList colors={colors} />
    </div>
  );
}

export default App;

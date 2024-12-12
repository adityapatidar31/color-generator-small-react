import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
function App() {
  const [colors, setColors] = useState([new Values("#f15025").all(10)]);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;

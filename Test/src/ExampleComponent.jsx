import { useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="example-component">
      <h1>Example Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
}

export default ExampleComponent;

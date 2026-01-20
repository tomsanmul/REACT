import { useState } from 'react';
import './App.css';

function ExampleComponent(props){
    const {data} = props;
    const [count, setCount] = useState(0);
    return (
        <div className="example-component">
            <h1>Example Component</h1>
            <p>{data.description}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me </button>
            <Link to="/">Back to Home</Link>
            </div>
    );

}

export default ExampleComponent;

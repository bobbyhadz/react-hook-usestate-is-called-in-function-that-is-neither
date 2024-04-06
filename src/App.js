import './App.css';

import React, {useState} from 'react';

// 👇️ is now a component (name starts with uppercase letter)
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

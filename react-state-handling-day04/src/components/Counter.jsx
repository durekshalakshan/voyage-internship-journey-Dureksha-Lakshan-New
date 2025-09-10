import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className="btn-group">
        <button className="btn increase" onClick={() => setCount(prev => prev + 1)}>
          Increase
        </button>
        <button className="btn decrease" onClick={() => setCount(prev => prev - 1)}>
          Decrease
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}

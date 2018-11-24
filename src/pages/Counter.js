import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="text-center count">{count}</h1>
      <div className="btns-group text-center">
        <button className="btn btn-primary" onClick={increment}>
          加
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          减
        </button>
        <button
          className="btn btn-secondary"
          disabled={count === 0}
          onClick={resetCount}
        >
          复位
        </button>
      </div>
    </div>
  );
};

export default Counter;

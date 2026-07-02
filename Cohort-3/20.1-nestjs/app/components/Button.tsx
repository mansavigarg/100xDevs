'use client';
import { useState } from "react";

export function Button() {
    const [count, setCount] = useState(0);
  return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
  );
}
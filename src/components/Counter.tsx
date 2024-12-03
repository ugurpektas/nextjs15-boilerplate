"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/store/features/counterSlice";

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Redux counter state</h1>
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;

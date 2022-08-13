import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [value, setValue]= useState(1);
  const dispatch = useDispatch();
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of Cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
    </div>
  );
};

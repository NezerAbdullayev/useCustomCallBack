import { useState } from "react";
import { ChildB } from "./ChildB";

const style = {
  color: "gray",
  background: "cyan",
  border: 0,
  borderRadius: "16px",
  padding: "5px 8px",
  margin: 6,
  cursor: "pointer",
};

const Parent = ({ funck, count, setCount }) => {
  console.log("Parent re-render, funck reference:", funck);
  return (
    <div>
      <div>Parent component</div>
      <div style={{ border: "0.2px solid", padding: 5 }}>
        <b>count- {count}</b>
        <button
          style={style}
          onClick={() => setCount(Math.floor(Math.random() * 99 + 1))}
        >
          change count
        </button>
      </div>
      <ChildB funck={funck} />
    </div>
  );
};
export default Parent;

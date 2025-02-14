import React, { memo } from "react";

export const ChildB = memo(({ funck }) => {
  console.log("re-rendering ChildB");

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 9999 + 1);
    funck(randomNumber);
  }

  return (
    <>
      <div>Child B component</div>
      <button onClick={handleClick} style={{ marginTop: 10 }}>
        Generate Random Number
      </button>
    </>
  );
});

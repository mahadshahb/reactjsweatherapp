import React, { useEffect, useState } from "react";
import "./styles.css";

const UseEffect = () => {
  const dataNumber = 0;
  const [initialData, setInitialData] = useState(dataNumber);
  useEffect(() => {
    document.title = `Chats ${initialData}`
  })
  return (
    <>
      <div className="center_div">
        <p>{initialData}</p>
        <div
          className="button2"
          onClick={() => setInitialData(initialData + 1)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;

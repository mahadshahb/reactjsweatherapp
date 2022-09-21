import React, { useEffect, useState } from "react";
import "./styles.css";

const UseState = () => {
  const dataNumber = 0;
  const [initialData, setInitialData] = useState(dataNumber);
  useEffect(() => {
    document.title = `You clicked ${initialData} times`;
  },[])
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
        <div
          className="button2"
          onClick={() =>
            initialData > 0
              ? setInitialData(initialData - 1)
              : setInitialData(0)
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;

import React, { useEffect, useRef, useState } from 'react'
function Refcounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count; 
  }, [count]);

  return (
    <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            gap: "16px",
        }}>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Refcounter;
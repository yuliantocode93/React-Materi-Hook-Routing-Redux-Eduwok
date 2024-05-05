import { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("mount and update");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default Effect;

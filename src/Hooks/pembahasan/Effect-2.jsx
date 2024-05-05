import { useEffect, useState } from "react";

const Effect2 = () => {
  let [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    console.log("mount and update");
  }, [text]);

  return (
    <div>
      <textarea cols={30} rows={10} onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  );
};

export default Effect2;

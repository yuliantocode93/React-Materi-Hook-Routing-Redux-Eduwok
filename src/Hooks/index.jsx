import { useState } from "react";
import Counter from "./pembahasan/Counter.jsx";
import Effect2 from "./pembahasan/Effect-2.jsx";
import Effect from "./pembahasan/Effect.jsx";
import { useToggle } from "./pembahasan/Hook/useToggle.js";
import Identify from "./pembahasan/Identify.jsx";

const Hooks = () => {
  let [label, setLabel] = useState("On");
  let [lampu, setLampu] = useToggle();

  const style = {
    backgroundColor: lampu ? "red" : "green",
    color: lampu ? "white" : "black",
  };

  const style2 = {
    backgroundColor: lampu ? "yellow" : "black",
    textAlign: "center",
    height: "100px",
  };

  const saklar = () => {
    setLampu(!lampu);
    setLabel(label === "On" ? "Off" : "On");
  };

  return (
    <div>
      <div style={style2}>
        <button onClick={saklar}> {label}</button>
      </div>

      <button
        style={style}
        onClick={() => {
          setLampu(!lampu);
          setLabel(label === "On" ? "Off" : "On");
        }}
      >
        {label}
      </button>
      <Counter />
      <Effect />
      <br />
      <br />
      <Effect2 />
      <Identify />
    </div>
  );
};
export default Hooks;

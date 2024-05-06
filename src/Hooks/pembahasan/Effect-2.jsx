import { useEffect, useState } from "react";

const Effect2 = () => {
  let [text, setText] = useState("");
  let [user, setUser] = useState({});
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("get API");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text);
    console.log("synchronize");
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <textarea cols={30} rows={10} onChange={(e) => setText(e.target.value)}></textarea>
      {user && (
        <>
          <p>nama: {user.name}</p>
          <p>{user.address && user.address.street}</p>
          <p>{user.company && user.company.name}</p>
          <p>{user.company && user.company.bs}</p>
        </>
      )}
      <div>
        waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik
      </div>
    </div>
  );
};

export default Effect2;

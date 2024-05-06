import { useCallback, useEffect, useState } from "react";

const Identity = () => {
  const fetchUser = useCallback(() => {
    return ["user1", "user2", "user3"];
  });
  let [user, setUser] = useState([]);

  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, []);
  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default Identity;

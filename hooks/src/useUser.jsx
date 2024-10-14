import { useEffect, useState } from "react";
import { getUser } from "./api";

export default function useUser() {
  // bên custom hook này thì chỉ return -> thường là object hoặc array
  const [user, setUser] = useState({});

  // khi mà component chạy thì useEffect nó sẽ chạy phía sau

  useEffect(() => {
    getUser().then((res) => {
      console.log("Respone => ", res);
      setUser(res.data);
    });
  }, []);

  return { user };
}

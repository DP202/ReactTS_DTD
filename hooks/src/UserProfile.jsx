import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./User";

export default function UserProfile() {
  const { increseaseAge } = useContext(UserContext); // là giá trị đã được khởi tạo bên User
  return (
    <div>
      <Profile />
      <button onClick={increseaseAge}>Increase Age </button>
    </div>
  );
}

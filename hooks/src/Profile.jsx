import React, { useContext } from "react";
import { UserContext } from "./User";

export default function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  return (
    <div>
      <ul>
        <h1> Hook Reactjs</h1>
        <li>FirstName : {firstName} </li>
        <li>Age : {age}</li>
        <li>Quốc tịch : {address.nation}</li>
        <li>Đường : {address.city.street}</li>
        <li>House : {address.city.house}</li>
      </ul>
    </div>
  );
}

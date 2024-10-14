import React, { useEffect, useState } from "react";
import { getUser } from "../api";
import useUser from "../useUser";

export default function Cart() {
  const { user } = useUser();
  return <div>Cart {user?.name}</div>; // ?. => truy cập vào đối tượng mà ko gây ra lỗi nếu đối tượng là null / undefined
}

import React, { useEffect, useState } from "react";
import { getUser } from "../api";
import useUser from "../useUser";

export default function Navigation() {
  const { user } = useUser();

  return <div>Navigation {user?.name}</div>; // ?. => truy cập vào đối tượng mà ko gây ra lỗi nếu đối tượng là null / undefined
}

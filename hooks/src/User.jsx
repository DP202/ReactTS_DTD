import React, { createContext, useEffect, useState } from "react";
import UserProfile from "./UserProfile";

// Khai báo 1 cái context
export const UserContext = createContext({
  // useContext này nó có default Value khi mà ko sử dụng Provider thì nó sử dụng giá trị default này
  address: {
    nation: "ABC",
    city: {
      street: "BCD",
      house: "Building",
    },
  },
  age: 100,
  firstName: "Kit 207",
  increseaseAge: () => {},
});

export default function User() {
  const [firstName] = useState("Dong Ta");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState({
    nation: "Việt Nam",
    city: {
      street: "Bến Lức , Long An",
      house: "Building",
    },
  });

  const increseaseAge = () => {
    setAge((preveAge) => {
      return age + 1;
    });
  };

  // Cách 1 :
  // const changeStreet = () => {
  //   setAddress((prevAddress) => {
  //     return {
  //       nation: prevAddress.nation,
  //       city: {
  //         street: "Long An",
  //         house: prevAddress.city.house,
  //       },
  //     };
  //   });
  // };
  const getAddress = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          nation: "USA",
          city: {
            street: "New York",
            house: "Building ",
          },
        });
      }, 3000);
    });
  };

  // Cách 2 : Dùng ...
  const changeStreet = () => {
    setAddress((prevAddress) => {
      return {
        ...prevAddress, // sao chép tất cả của thuộc tính prevAddress
        city: {
          ...prevAddress.city, // sao chép tất cả thuộc tính của city
          street: "Long An",
        },
      };
    });
  };

  // useEffect :
  // th1 : ko có depens -> là mỗi khi component được cập nhật thì nó re-render lại
  // ví dụ : gọi api
  // useEffect(() => {
  //   console.log("UseEffect ko truyền Depencies");
  // });

  // th2 : dependencies là một mảng rỗng -> nó chỉ render 1 lần
  useEffect(() => {
    console.log("Khi truyền dependecies là 1 mảng rỗng");
    // gọi api

    getAddress().then((res) => {
      console.log("Respone : ", res);
      setAddress(res);
    });
  }, []);

  // Trong 1 số trường hợp muốn sử dụng lại state cũ -> như cái useEffect này ta muốn sử dụng lại cái address cũ
  useEffect(() => {
    console.log("Sử dụng lại State cũ");
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    // clean up function
    return () => {
      console.log(
        "Clean up function này nó sẽ chạy trước khi component bị destroy"
      );
    };
  }, []); // khi address thay đổi thì effect function (callback function) -> nó sẽ chạy lại

  // useContext : sinh ra để hạn chế sử dụng truyền props quá nhiều lần

  return (
    <div>
      {/* Dùng 1 cái provider để bao bọc cái UserProfile để sài được useContext 
        bởi vì ta muốn những thèn nằm trong provider nó sữ dụng được value
      */}
      <UserContext.Provider
        value={{
          firstName, // tương đương firstName : firstName
          age,
          address,
          increseaseAge,
        }}
      >
        <UserProfile />
      </UserContext.Provider>

      <button onClick={changeStreet}>Change Street</button>
    </div>
  );
}

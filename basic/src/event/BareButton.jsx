import React from "react";

function BareButton() {
  // Cách 1 :

  //   const handleClick = (value) => {
  //     console.log(value);
  //   };

  // Cách 2 :
  //   const handleClick = (value) => () => {
  //     console.log(value);
  //   };
  // Tương đương với
  const handleClick = (value) => {
    return () => {
      console.log(value);
    };
  };
  return (
    <div>
      {/* 3 cái đầu là dùng cách 1 :  */}
      {/* <button onClick={() => handleClick("Add")}>Add</button>
      <button onClick={() => handleClick("Delete")}>Delete</button>
      <button onClick={() => handleClick("Edit")}>Edit</button> */}

      {/*Cách 2 :  */}
      <button onClick={handleClick("Add")}>Add</button>
      <button onClick={handleClick("Delete")}>Delete</button>
      <button onClick={handleClick("Edit")}>Edit</button>
    </div>
  );
}

export default BareButton;

import React from "react";
import "./cart.scss";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

// Nếu muốn kế thừa

const ContainerExtends = styled(Container)`
  max-width: 2000px;
`;

const StyledButton = styled(Buttons)`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.blue ? "blue" : "red"}; // truyền props vào trong css
`;

function Buttons({ isShow, className }) {
  return (
    <button className={className}>
      <button
        className="button-item"
        style={{
          backgroundColor: "yellow",
          display: isShow ? "inline-block" : "none",
        }}
      ></button>
    </button>
  );
}
export default function Cart({ isShow }) {
  return (
    <ContainerExtends>
      Cart
      <StyledButton isShow={isShow} blue />
    </ContainerExtends>
  );
}

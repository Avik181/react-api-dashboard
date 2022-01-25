import "./styles.css";
import { useEffect, useState } from "react";
import Rows from "./Row";
import styled from "styled-components";

export default function App() {
  const baseURL = "https://my-json-server.typicode.com/Ved-X/assignment/orders";

  return (
    <Component>
      <Rows />
    </Component>
  );
}

const Component = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

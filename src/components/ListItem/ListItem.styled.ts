import styled from "styled-components";
import { Link } from "react-router-dom";
export const TodoLink = styled(Link)<{ $colorflag: boolean }>`
  text-decoration: none;
  padding: 10px;

  color: ${(props) => (props.$colorflag ? "green" : "red")};
`;

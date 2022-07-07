import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkS = styled(Link)`
  cursor: pointer;
  font: inherit;
  color: teal;
  border: none;
  background-color: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: teal;
    color: white;
  }
`;

import styled from "styled-components";
import Button from "../UI/Button/Button";

export const QuotesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Sorting = styled.div`
  padding-bottom: 1rem;
  border-bottom: 3px solid #b2d4d4;
  margin-bottom: 2rem;
`;

export const ButtonSort = styled(Button)`
  font: inherit;
  color: teal;
  border: 1px solid teal;
  background-color: transparent;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #c2fafa;
  }
`;

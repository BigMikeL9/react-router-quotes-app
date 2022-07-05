import styled from "styled-components";
import Button from "../Button/Button";

export const Form = styled.form`
  position: relative;
`;

export const LoadingSpinnerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input,
  & textarea {
    font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;

    &:focus {
      background-color: #cbf8f8;
      outline-color: teal;
    }
  }
`;

export const FormActions = styled.div`
  text-align: right;
`;

export const FormButton = styled(Button)`
  font-size: 1.25rem;
`;

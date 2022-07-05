import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card/Card";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

import {
  Form,
  LoadingSpinnerContainer,
  FormControl,
  FormActions,
  FormButton,
} from "../UI/Form/Form";

const QuoteForm = (props) => {
  const [isFormFocused, setIsFormFocused] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  const formFocusHandler = () => {
    setIsFormFocused(true);
  };

  const buttonClickHandler = () => {
    //  we don't add this 👇 in 'submitFormHandler()' function because it would be too late and the Prompt will render.
    setIsFormFocused(false);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <>
      <Prompt
        when={isFormFocused}
        message={(location) =>
          `Are you sure you want to leave? All entered data will be lost. You will go to page with this '${location.pathname}' page`
        }
      />
      <Card>
        <Form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <LoadingSpinnerContainer>
              <LoadingSpinner />
            </LoadingSpinnerContainer>
          )}

          <FormControl>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </FormControl>

          <FormControl>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </FormControl>

          <FormActions>
            <FormButton
              onClick={buttonClickHandler}
              className="btn"
              type="submit"
            >
              Add Quote
            </FormButton>
          </FormActions>
        </Form>
      </Card>
    </>
  );
};

export default QuoteForm;

import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const NotFoundPageS = styled.div`
  margin: 3rem auto;
  text-align: center;
`;

const LinkS = styled(Link)`
  display: inline-block;
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageS>
      <h1>Page Not Found! 😭</h1>

      <div>
        <LinkS to="/" className="btn">
          Go back to Homepage
        </LinkS>
      </div>
    </NotFoundPageS>
  );
};

export default NotFoundPage;

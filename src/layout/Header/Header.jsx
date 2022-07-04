import React from "react";

import {
  HeaderContainer,
  NavLogo,
  Nav,
  NavList,
  NavItem,
  NavLinkS,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <NavLogo>Great Quotes</NavLogo>

      <Nav>
        <NavList>
          <NavItem>
            <NavLinkS to="/quotes">All Quotes</NavLinkS>
          </NavItem>
          <NavItem>
            <NavLinkS to="/new-quote">Add a Quote</NavLinkS>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

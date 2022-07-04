import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  background-color: #008080;
`;

export const NavLogo = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 1.5rem;
  font-size: 1.25rem;
`;

export const NavLinkS = styled(NavLink)`
  text-decoration: none;
  color: #88dfdf;

  &:hover,
  &:active,
  &.active {
    color: #e6fcfc;
  }
`;

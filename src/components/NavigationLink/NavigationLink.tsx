import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {COLORS} from '../../utilities/colors';

interface Props {
  to: string;
  content: string;
  onClick?(): void;
}

interface StyledProps {
  styledFont: boolean;
}

function NavigationLink({to, content, onClick}: Props) {
  const solonaMontez = to === '/';

  return (
    <NavigationListItem styledFont={solonaMontez}>
      <NavLink to={to} exact={true} onClick={onClick}>
        {content}
      </NavLink>
    </NavigationListItem>
  );
}

export const NavigationWrapper = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: ${COLORS.Black};
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

const NavigationListItem = styled.li<StyledProps>`
  background: ${COLORS.Black};
  border: 0px;
  height: 4rem;
  cursor: pointer;

  @media screen and (max-width: 599px) {
    display: block;
    margin-block-start: 0;
    margin-bottom: 0;
    padding-left: 1rem;
  }

  @media screen and (min-width: 600px) {
    display: inline;
    margin-left: auto;
    margin-right: auto;
    margin-block-start: 1.1rem;
  }

  a,
  a:link,
  a:visited {
    color: ${COLORS.White};
    ${(props) => (props.styledFont ? `font-size: 1.7rem` : `font-size: 1rem`)};
    ${(props) => props.styledFont && `font-family: 'Montez'`};
    ${(props) =>
      props.styledFont ? `padding-bottom: 0.4rem` : `padding-bottom: 0.92rem`};
    text-decoration: none;
    margin-right: 4.5rem;

    @media screen and (min-width: 600px) and (max-width: 799px) {
      margin-right: 2rem;
    }
  }

  a:hover {
    ${(props) =>
      props.styledFont ? `color: ${COLORS.Blue}` : `color: ${COLORS.Orange}`};
  }

  &:last-of-type {
    a {
      margin-right: 0;
    }
  }

  a.active,
  a.active:hover,
  a.active:active,
  a.active:focus {
    ${(props) =>
      props.styledFont
        ? `border-bottom: none`
        : `border-bottom: 0.3rem solid ${COLORS.Orange}`};
    ${(props) =>
      props.styledFont ? `color: ${COLORS.Blue}` : `color: ${COLORS.Orange}`};
  }
`;

export const NavigationDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: auto;

  @media screen and (max-width: 599px) {
    display: none;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    max-width: 30rem;
  }

  @media screen and (min-width: 800px) {
    max-width: 50rem;
  }
`;

export const NavigationMobile = styled.div`
  @media screen and (max-width: 599px) {
    .Navigation--desktop {
      display: none;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default NavigationLink;

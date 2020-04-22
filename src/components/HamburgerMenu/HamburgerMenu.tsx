import React, {useState} from 'react';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration} from '../../utilities/types';
import {COLORS} from '../../utilities/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

interface Props {
  children: React.ReactNode;
}

function HamburgerMenu(props: Props) {
  const {children} = props;
  const [open, toggleOpen] = useState(false);

  const HamburgerMenuStyles = styled.div``;

  const ToggleMenu = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 20px;
    top: 12px;
    z-index: 998;
  `;

  const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    z-index: 999;
    transform: translateY(-1000px);
    opacity: 0;

    &.menu-enter {
      transform: translateY(-1000px);
      opacity: 0;
    }

    &.menu-enter-done {
      transform: translateY(0);
      opacity: 1;
      transition: opacity 200ms ease-in, transform 400ms ease-out;
    }

    &.menu-exit {
      transform: translateY(0);
      opacity: 1;
    }

    &.menu-exit-active {
      transform: translateY(0);
      opacity: 1;
    }

    &.menu-exit-done {
      transform: translateY(-100px);
      opacity: 0;
      transition: opacity 200ms ease-in, transform 200ms ease-out;
    }

    button {
      text-align: left;
    }
  `;

  const MenuUnderlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${COLORS.Black};
    opacity: 0.5;
    z-index: 997;
    width: 100%;
    height: 100%;

    &.underlay-enter {
      opacity: 0;
    }

    &.underlay-enter-active {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }

    &.underlay-enter-done {
      opacity: 0.5;
    }

    &.underlay-exit {
      opacity: 0.5;
    }

    &.underlay-exit-active {
      opacity: 0.5;
    }

    &.underlay-exit-done {
      opacity: 0;
      transition: opacity 400ms ease-in;
    }
  `;

  return (
    <HamburgerMenuStyles>
      <ToggleMenu onClick={() => toggleOpen(!open)}>
        <FontAwesomeIcon icon={faBars} size="2x" color="#fff" />
      </ToggleMenu>
      <CSSTransition
        in={open}
        appear={open}
        timeout={TransitionDuration.Immediate}
        classNames="menu"
      >
        <MenuWrapper className="MenuWrapper">{children}</MenuWrapper>
      </CSSTransition>
      <CSSTransition
        in={open}
        appear={open}
        timeout={TransitionDuration.Immediate}
        classNames="underlay"
        unmountOnExit
      >
        <MenuUnderlay onClick={() => toggleOpen(!open)} />
      </CSSTransition>
    </HamburgerMenuStyles>
  );
}

export default HamburgerMenu;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration} from '../../utilities/types';

interface Props {
  duration?: TransitionDuration;
  children: React.ReactNode;
}

interface StyledProps {
  styledDuration: TransitionDuration;
}

function FadeIn(props: Props) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  });

  const {duration = TransitionDuration.Slow, children} = props;

  return (
    <FadeInWrapper>
      <CSSTransition
        in={fadeIn}
        appear={fadeIn}
        timeout={duration}
        classNames="FadeIn"
      >
        <FadeInStyles styledDuration={duration}>{children}</FadeInStyles>
      </CSSTransition>
    </FadeInWrapper>
  );
}

const FadeInWrapper = styled.div``;

const FadeInStyles = styled.div<StyledProps>`
  opacity: 0.01;

  &.FadeIn-enter {
    opacity: 0.01;
  }

  &.FadeIn-enter-done {
    opacity: 1;
    transition: opacity
        ${(props) => props.styledDuration && props.styledDuration}ms ease-in,
      transform ${(props) => props.styledDuration && props.styledDuration}ms
        ease-in;
  }
`;

export default FadeIn;

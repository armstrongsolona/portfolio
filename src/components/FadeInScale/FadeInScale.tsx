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

function FadeInScale(props: Props) {
  const [fadeInScale, setFadeInScale] = useState(false);

  useEffect(() => {
    setFadeInScale(true);
  });

  const {duration = TransitionDuration.Slow, children} = props;

  return (
    <FadeInScaleWrapper>
      <CSSTransition
        in={fadeInScale}
        appear={fadeInScale}
        timeout={duration}
        classNames="FadeInScale"
      >
        <FadeInScaleStyles styledDuration={duration}>
          {children}
        </FadeInScaleStyles>
      </CSSTransition>
    </FadeInScaleWrapper>
  );
}

const FadeInScaleWrapper = styled.div``;

const FadeInScaleStyles = styled.div<StyledProps>`
  opacity: 0.01;
  transform: scale(0.9);

  &.FadeInScale-enter {
    opacity: 0.01;
    transform: scale(0.9);
  }

  &.FadeInScale-enter-done {
    opacity: 1;
    transform: scale(1);
    transition: opacity
        ${(props) => props.styledDuration && props.styledDuration}ms ease-in,
      transform ${(props) => props.styledDuration && props.styledDuration}ms
        ease-in;
  }
`;

export default FadeInScale;

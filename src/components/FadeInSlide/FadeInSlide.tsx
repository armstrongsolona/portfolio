import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';
import {TransitionDuration, SlideDirection} from '../../utilities/types';

interface Props {
  duration?: TransitionDuration;
  direction?: SlideDirection;
  children: React.ReactNode;
}

interface StyledProps {
  styledDuration: TransitionDuration;
  styledTransformValue: string;
}

function FadeInSlide(props: Props) {
  const [fadeInSlide, setFadeInSlide] = useState(false);

  useEffect(() => {
    setFadeInSlide(true);
  });

  const {
    duration = TransitionDuration.Slow,
    direction = 'up',
    children,
  } = props;

  const cssVariablesPrefix = '--FadeInSlide-';
  const cssVariables: React.CSSProperties = {
    [`${cssVariablesPrefix}duration`]: `${duration}ms`,
  };

  let styledTransformValue;

  switch (direction) {
    case 'up':
      styledTransformValue = 'translateY(-16px)';
      break;
    case 'down':
      styledTransformValue = 'translateY(16px)';
      break;
    case 'left':
      styledTransformValue = 'translateX(16px)';
      break;
    case 'right':
      styledTransformValue = 'translateX(-16px)';
      break;
    default:
      styledTransformValue = 'translateY(-16px)';
  }

  return (
    <div className="FadeInSlideWrapper" style={cssVariables}>
      <CSSTransition
        in={fadeInSlide}
        timeout={duration}
        classNames={`FadeInSlide--${direction}`}
        unmountOnExit
      >
        <FadeInSlideStyles
          styledDuration={duration}
          styledTransformValue={direction}
        >
          {children}
        </FadeInSlideStyles>
      </CSSTransition>
    </div>
  );
}

const FadeInSlideStyles = styled.div<StyledProps>`
  .FadeInSlide-enter {
    opacity: 0.01;
    transform: ${(props) => props.styledTransformValue};
  }
  .FadeInSlide-enter-active {
    opacity: 1;
    transform: none;
    transition: all ${(props) => props.styledDuration && props.styledDuration}ms
      ease-in;
  }
`;

export default FadeInSlide;

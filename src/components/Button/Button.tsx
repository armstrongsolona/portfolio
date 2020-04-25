import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../utilities/colors';

export type styledSize = 'small' | 'medium' | 'large';
export type styledColor = 'blue' | 'orange' | 'white';

interface Props {
  size?: styledSize;
  color?: styledColor;
  content: string;
  accessibilityLabel?: string;
  onClick?(): void;
}

interface StyledProps {
  styledBackground: string;
  styledBorder: string;
  styledColor: string;
  styledPadding: string;
  styledSize: string;
}

function Button({
  size = 'medium',
  color = 'blue',
  accessibilityLabel,
  content,
  onClick,
}: Props) {
  let styledPadding;
  let styledSize;

  switch (size) {
    case 'small':
      styledPadding = '0.5rem';
      styledSize = '0.9rem';
      break;
    case 'medium':
      styledPadding = '0.75rem';
      styledSize = '1.1rem';
      break;
    case 'large':
      styledPadding = '0.75rem 1.4rem';
      styledSize = '1.4rem';
    default:
      styledPadding = '0.75rem';
      styledSize = '1.1rem';
  }

  let styledBackground;
  let styledBorder;
  let styledColor;

  switch (color) {
    case 'blue':
      styledBackground = COLORS.Blue;
      styledBorder = 'none';
      styledColor = COLORS.White;
      break;
    case 'orange':
      styledBackground = COLORS.Orange;
      styledBorder = 'none';
      styledColor = COLORS.White;
      break;
    case 'white':
      styledBackground = COLORS.White;
      styledBorder = `1px solid ${COLORS.Grey}`;
      styledColor = COLORS.Black;
      break;
    default:
      styledBackground = COLORS.White;
      styledBorder = `1px solid ${COLORS.Grey}`;
      styledColor = COLORS.Black;
  }

  return (
    <ButtonStyles
      styledBackground={styledBackground}
      styledBorder={styledBorder}
      styledColor={styledColor}
      styledPadding={styledPadding}
      styledSize={styledSize}
      aria-label={accessibilityLabel}
      onClick={onClick}
    >
      {content}
    </ButtonStyles>
  );
}

const ButtonStyles = styled.button<StyledProps>`
  border-radius: 4px;
  box-shadow: 0px;
  font-weight: bold;
  font-family: 'Montserrat';
  cursor: pointer;

  ${(props) =>
    props.styledBackground && `background: ${props.styledBackground}`};
  ${(props) => props.styledBorder && `border: ${props.styledBorder}`};
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) => props.styledPadding && `padding: ${props.styledPadding}`};
  ${(props) => props.styledSize && `font-size: ${props.styledSize}`};
`;

export default Button;

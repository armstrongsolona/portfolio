import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../utilities/colors';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'blue' | 'orange' | 'white';

interface Props {
  size?: ButtonSize;
  color?: ButtonColor;
  content: string;
  accessibilityLabel?: string;
  onClick?(): void;
}

interface StyledProps {
  buttonBackground: string;
  buttonBorder: string;
  buttonColor: string;
  buttonPadding: string;
  buttonSize: string;
}

function Button({
  size = 'medium',
  color = 'blue',
  accessibilityLabel,
  content,
  onClick,
}: Props) {
  let buttonPadding;
  let buttonSize;

  switch (size) {
    case 'small':
      buttonPadding = '0.5rem';
      buttonSize = '0.9rem';
      break;
    case 'medium':
      buttonPadding = '0.75rem';
      buttonSize = '1.1rem';
      break;
    case 'large':
      buttonPadding = '0.75rem 1.4rem';
      buttonSize = '1.4rem';
    default:
      buttonPadding = '0.75rem';
      buttonSize = '1.1rem';
  }

  let buttonBackground;
  let buttonBorder;
  let buttonColor;

  switch (color) {
    case 'blue':
      buttonBackground = COLORS.Blue;
      buttonBorder = 'none';
      buttonColor = COLORS.White;
      break;
    case 'orange':
      buttonBackground = COLORS.Orange;
      buttonBorder = 'none';
      buttonColor = COLORS.White;
      break;
    case 'white':
      buttonBackground = COLORS.White;
      buttonBorder = `1px solid ${COLORS.Grey}`;
      buttonColor = COLORS.Black;
      break;
    default:
      buttonBackground = COLORS.White;
      buttonBorder = `1px solid ${COLORS.Grey}`;
      buttonColor = COLORS.Black;
  }

  return (
    <ButtonStyles
      buttonBackground={buttonBackground}
      buttonBorder={buttonBorder}
      buttonColor={buttonColor}
      buttonPadding={buttonPadding}
      buttonSize={buttonSize}
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
    props.buttonBackground && `background: ${props.buttonBackground}`};
  ${(props) => props.buttonBorder && `border: ${props.buttonBorder}`};
  ${(props) => props.buttonColor && `color: ${props.buttonColor}`};
  ${(props) => props.buttonPadding && `padding: ${props.buttonPadding}`};
  ${(props) => props.buttonSize && `font-size: ${props.buttonSize}`};
`;

export default Button;

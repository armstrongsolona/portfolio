import React from 'react';
import {Color, Font} from '../../utilities/types';
import {COLORS} from '../../utilities/colors';
import styled from 'styled-components';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface Props {
  color?: Color;
  element: HeadingElement;
  extraSpace?: boolean;
  font?: Font;
  size?: string;
  children: string;
}

interface StyledProps {
  styledColor: string;
  styledExtraSpace: boolean;
  styledFontFamily: string;
  styledFontWeight: string;
  styledFontSize: string | null;
}

function Heading({
  color,
  element,
  extraSpace = false,
  font,
  size,
  children,
}: Props) {
  let headingColor;

  switch (color) {
    case 'Black':
      headingColor = COLORS.Black;
      break;
    case 'Blue':
      headingColor = COLORS.Blue;
      break;
    case 'Orange':
      headingColor = COLORS.Orange;
    case 'White':
      headingColor = COLORS.White;
      break;
    default:
      headingColor = COLORS.Black;
  }

  const headingFontFamily = font === 'Montez' ? 'Montez' : 'Montserrat';
  const headingFontWeight = font === 'Montez' ? 'normal' : 'bold';

  let HeadingElement;

  switch (element) {
    case 'h1':
      HeadingElement = Heading1;
      break;
    case 'h2':
      HeadingElement = Heading2;
      break;
    case 'h3':
      HeadingElement = Heading3;
      break;
    case 'h4':
      HeadingElement = Heading4;
      break;
    case 'h5':
      HeadingElement = Heading5;
      break;
    default:
      HeadingElement = Heading4;
  }

  const styledFontSize = size ? size : null;

  return (
    <HeadingElement
      styledColor={headingColor}
      styledExtraSpace={extraSpace}
      styledFontFamily={headingFontFamily}
      styledFontWeight={headingFontWeight}
      styledFontSize={styledFontSize}
    >
      {children}
    </HeadingElement>
  );
}

const Heading1 = styled.h1<StyledProps>`
  font-size: ${(props) =>
    props.styledFontSize ? props.styledFontSize : `8rem`};
  margin-bottom: 0.5rem;
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) =>
    props.styledFontFamily && `font-family: ${props.styledFontFamily}`};
  ${(props) => props.styledFontFamily === 'Montez' && `margin-top: 0`};
  ${(props) =>
    props.styledFontWeight && `font-weight: ${props.styledFontWeight}`};
  ${(props) => props.styledExtraSpace && `margin-top: 3rem`};
`;

const Heading2 = styled.h2<StyledProps>`
  font-size: ${(props) =>
    props.styledFontSize ? props.styledFontSize : `2rem`};
  margin-bottom: 0.5rem;
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) =>
    props.styledFontFamily && `font-family: ${props.styledFontFamily}`};
  ${(props) =>
    props.styledFontWeight && `font-weight: ${props.styledFontWeight}`};
  ${(props) => props.styledExtraSpace && `margin-top: 3rem`};
`;

const Heading3 = styled.h3<StyledProps>`
  font-size: ${(props) =>
    props.styledFontSize ? props.styledFontSize : `1.5rem`};
  margin-bottom: 0.5rem;
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) =>
    props.styledFontFamily && `font-family: ${props.styledFontFamily}`};
  ${(props) =>
    props.styledFontWeight && `font-weight: ${props.styledFontWeight}`};
  ${(props) => props.styledExtraSpace && `margin-top: 3rem`};
`;

const Heading4 = styled.h4<StyledProps>`
  font-size: ${(props) =>
    props.styledFontSize ? props.styledFontSize : `1.4rem`};
  margin-bottom: 0.5rem;
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) =>
    props.styledFontFamily && `font-family: ${props.styledFontFamily}`};
  ${(props) =>
    props.styledFontWeight && `font-weight: ${props.styledFontWeight}`};
  ${(props) => props.styledExtraSpace && `margin-top: 3rem`};
`;

const Heading5 = styled.h5<StyledProps>`
  font-size: ${(props) =>
    props.styledFontSize ? props.styledFontSize : `1.1rem`};
  margin-bottom: 0.5rem;
  ${(props) => props.styledColor && `color: ${props.styledColor}`};
  ${(props) =>
    props.styledFontFamily && `font-family: ${props.styledFontFamily}`};
  ${(props) =>
    props.styledFontWeight && `font-weight: ${props.styledFontWeight}`};
  ${(props) => props.styledExtraSpace && `margin-top: 3rem`};
`;

export default Heading;

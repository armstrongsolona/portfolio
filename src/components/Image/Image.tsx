import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../utilities/colors';

export enum ImageSize {
  SmallIcon = 'smallIcon',
  Icon = 'icon',
  ExtraSmall = 'extraSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full',
}

interface Props {
  src: string;
  alt: string;
  size?: ImageSize;
  round?: boolean;
  boxShadow?: boolean;
}

interface ImageStylesProps {
  styledHeight: string;
  styledWidth: string;
  styledRounded: boolean;
  styledBoxShadow: boolean;
}

function Image({src, alt, size, round = false, boxShadow = false}: Props) {
  let styledHeight;
  let styledWidth;

  switch (size) {
    case 'smallIcon':
      styledHeight = '1.4rem';
      styledWidth = '1.4rem';
      break;
    case 'icon':
      styledHeight = '3.125rem';
      styledWidth = '3.125rem';
      break;
    case 'small':
      styledHeight = '6.25rem';
      styledWidth = '6.25rem';
      break;
    case 'medium':
      styledHeight = '12rem';
      styledWidth = '12rem';
      break;
    case 'large':
      styledHeight = '25rem';
      styledWidth = '25rem';
      break;
    case 'full':
      styledHeight = '100%';
      styledWidth = '100%';
    default:
      styledHeight = '12.5rem';
      styledWidth = '12.5rem';
  }

  return (
    <ImageStyles
      src={src}
      alt={alt}
      title={alt}
      styledHeight={styledHeight}
      styledWidth={styledWidth}
      styledRounded={round}
      styledBoxShadow={boxShadow}
    />
  );
}

const ImageStyles = styled.img<ImageStylesProps>`
  ${(props) => props.styledHeight && `height: ${props.styledHeight}`};
  ${(props) => props.styledWidth && `width: ${props.styledWidth}`};
  ${(props) => props.styledRounded && `border-radius: 50%`};
  ${(props) =>
    props.styledBoxShadow && `box-shadow: 1px 2px 8px ${COLORS.Grey}`};
  ${(props) =>
    props.styledBoxShadow && `border: 0.75rem solid ${COLORS.White}`};
`;

export default Image;

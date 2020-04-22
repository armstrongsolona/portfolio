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
  imageHeight: string;
  imageWidth: string;
  imageRounded: boolean;
  boxShadow: boolean;
}

function Image({src, alt, size, round = false, boxShadow = false}: Props) {
  let imageHeight;
  let imageWidth;

  switch (size) {
    case 'smallIcon':
      imageHeight = '1.4rem';
      imageWidth = '1.4rem';
      break;
    case 'icon':
      imageHeight = '3.125rem';
      imageWidth = '3.125rem';
      break;
    case 'small':
      imageHeight = '6.25rem';
      imageWidth = '6.25rem';
      break;
    case 'medium':
      imageHeight = '12rem';
      imageWidth = '12rem';
      break;
    case 'large':
      imageHeight = '25rem';
      imageWidth = '25rem';
      break;
    case 'full':
      imageHeight = '100%';
      imageWidth = '100%';
    default:
      imageHeight = '12.5rem';
      imageWidth = '12.5rem';
  }

  return (
    <ImageStyles
      src={src}
      alt={alt}
      title={alt}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      imageRounded={round}
      boxShadow={boxShadow}
    />
  );
}

const ImageStyles = styled.img<ImageStylesProps>`
  ${(props) => props.imageHeight && `height: ${props.imageHeight}`};
  ${(props) => props.imageWidth && `width: ${props.imageWidth}`};
  ${(props) => props.imageRounded && `border-radius: 50%`};
  ${(props) => props.boxShadow && `box-shadow: 1px 2px 8px ${COLORS.Grey}`};
  ${(props) => props.boxShadow && `border: 0.75rem solid ${COLORS.White}`};
`;

export default Image;

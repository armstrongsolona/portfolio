import React from 'react';
import styled from 'styled-components';

export enum ParagraphWidth {
  Narrow = 'narrow',
  Wide = 'wide',
  Full = 'full',
}

export enum ParagraphTextSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props {
  centered?: boolean;
  extraSpace?: boolean;
  textSize?: ParagraphTextSize;
  width?: ParagraphWidth;
  children: React.ReactNode;
}

interface StyledProps {
  styledCentered: boolean;
  styledExtraSpace: boolean;
  styledTextSize: ParagraphTextSize;
  styledWidth: string;
  styledMaxWidth: string;
}

function Paragraph({
  centered = false,
  extraSpace = false,
  textSize = ParagraphTextSize.Medium,
  width = ParagraphWidth.Narrow,
  children,
}: Props) {
  let styledWidth;
  let styledMaxWidth;

  switch (width) {
    case ParagraphWidth.Narrow:
      styledWidth = '60%';
      styledMaxWidth = '37rem';
      break;
    case ParagraphWidth.Wide:
      styledWidth = '80%';
      styledMaxWidth = '50rem';
      break;
    default:
      styledWidth = '100%';
      styledMaxWidth = '100%';
  }

  return (
    <ParagraphStyles
      styledCentered={centered}
      styledExtraSpace={extraSpace}
      styledTextSize={textSize}
      styledWidth={styledWidth}
      styledMaxWidth={styledMaxWidth}
    >
      {children}
    </ParagraphStyles>
  );
}

const ParagraphStyles = styled.p<StyledProps>`
  margin: 0 auto 8px auto;
  text-align: left;
  ${(props) => props.styledCentered && `text-align: center`};
  ${(props) => props.styledExtraSpace && `margin: 1.4rem 0`};
  ${(props) => props.styledTextSize === 'small' && `font-size: 0.9rem`};
  ${(props) => props.styledTextSize === 'medium' && `font-size: 1rem`};
  ${(props) => props.styledTextSize === 'medium' && `line-height: 1.5rem`};
  ${(props) => props.styledTextSize === 'large' && `font-size: 1.2rem`};
  ${(props) => props.styledTextSize === 'medium' && `line-height: 1.7rem`};
  ${(props) => props.styledWidth && `width: ${props.styledWidth}`};
  ${(props) => props.styledWidth && `max-width: ${props.styledMaxWidth}`};
`;

export default Paragraph;

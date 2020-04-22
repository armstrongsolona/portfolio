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
  paragraphCentered: boolean;
  paragraphExtraSpace: boolean;
  paragraphTextSize: ParagraphTextSize;
  paragraphWidth: string;
  paragraphMaxWidth: string;
}

function Paragraph({
  centered = false,
  extraSpace = false,
  textSize = ParagraphTextSize.Medium,
  width = ParagraphWidth.Narrow,
  children,
}: Props) {
  let paragraphWidth;
  let paragraphMaxWidth;

  switch (width) {
    case ParagraphWidth.Narrow:
      paragraphWidth = '60%';
      paragraphMaxWidth = '37rem';
      break;
    case ParagraphWidth.Wide:
      paragraphWidth = '80%';
      paragraphMaxWidth = '50rem';
      break;
    default:
      paragraphWidth = '100%';
      paragraphMaxWidth = '100%';
  }

  return (
    <ParagraphStyles
      paragraphCentered={centered}
      paragraphExtraSpace={extraSpace}
      paragraphTextSize={textSize}
      paragraphWidth={paragraphWidth}
      paragraphMaxWidth={paragraphMaxWidth}
    >
      {children}
    </ParagraphStyles>
  );
}

const ParagraphStyles = styled.p<StyledProps>`
  margin: 0 auto 8px auto;
  text-align: left;
  ${(props) => props.paragraphCentered && `text-align: center`};
  ${(props) => props.paragraphExtraSpace && `margin: 1.4rem 0`};
  ${(props) => props.paragraphTextSize === 'small' && `font-size: 0.9rem`};
  ${(props) => props.paragraphTextSize === 'medium' && `font-size: 1rem`};
  ${(props) => props.paragraphTextSize === 'medium' && `line-height: 1.5rem`};
  ${(props) => props.paragraphTextSize === 'large' && `font-size: 1.2rem`};
  ${(props) => props.paragraphTextSize === 'medium' && `line-height: 1.7rem`};
  ${(props) => props.paragraphWidth && `width: ${props.paragraphWidth}`};
  ${(props) => props.paragraphWidth && `max-width: ${props.paragraphMaxWidth}`};
`;

export default Paragraph;

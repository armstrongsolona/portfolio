import React from 'react';
import styled from 'styled-components';

export type SpacingContainerSpace =
  | 'tight'
  | 'regular'
  | 'loose'
  | 'extra-loose';

interface Props {
  space?: SpacingContainerSpace;
  children: React.ReactNode;
}

interface StyledProps {
  styledSpace: string;
}

function SpacingContainer({space = 'regular', children}: Props) {
  let styledSpace = '1.4rem';

  switch (space) {
    case 'tight':
      '0.75rem';
      break;
    case 'regular':
      '1.4rem';
      break;
    case 'loose':
      '2.4rem';
      break;
    case 'extra-loose':
      '3.75rem';
      break;
  }

  return (
    <SpacingContainerStyles styledSpace={styledSpace}>
      {children}
    </SpacingContainerStyles>
  );
}

const SpacingContainerStyles = styled.div<StyledProps>`
  ${(props) => props.styledSpace && `margin-top: ${props.styledSpace}`}
`;

export default SpacingContainer;

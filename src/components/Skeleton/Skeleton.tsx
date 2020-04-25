import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../utilities/colors';

export type Alignment = 'centered' | 'left';

interface Props {
  alignment?: Alignment;
}

interface StyledProps {
  styledAlignment: string;
}

function Skeleton(props: Props) {
  const {alignment} = props;

  const styledAlignment = alignment === 'centered' ? 'center' : 'flex-start';

  return (
    <SkeletonWrapper styledAlignment={styledAlignment}>
      <SkeletonLong />
      <SkeletonLong />
      <SkeletonShort />
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styled.div<StyledProps>`
  width: 31.25rem;
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;

  ${(props) => props.styledAlignment && `align-items: ${props.styledAlignment}`}
`;

const SkeletonStyles = styled.div`
  height: 0.8rem;
  border-radius: 0.9rem;
  background: ${COLORS.GreyLight};
  background-image: linear-gradient(
    to right,
    ${COLORS.GreyLight} 0%,
    #eee 20%,
    ${COLORS.GreyLight} 40%,
    ${COLORS.GreyLight} 100%
  );
  background-size: 50rem 6.25rem;
  background-repeat: no-repeat;
  margin: 0.5rem;
  animation: shimmer 1.3s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const SkeletonLong = styled(SkeletonStyles)`
  width: 31.25rem;
  max-width: 70%;
`;

const SkeletonShort = styled(SkeletonStyles)`
  width: 18.75rem;
  max-width: 50%;
`;

// @keyframes shimmer {
//   0% {
//     background-position: -200px 0;
//   }

//   100% {
//       background-position: 500px 0;
//   }
// }

export default Skeleton;

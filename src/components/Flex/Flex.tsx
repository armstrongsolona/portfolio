import React from 'react';
import styled from 'styled-components';

export type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type flexWrap = 'nowrap' | 'wrap';
export type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type alignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type alignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

interface Props {
  flexDirection?: flexDirection;
  flexWrap?: flexWrap;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
  alignContent?: alignContent;
  children: React.ReactNode;
}

interface StyledProps {
  styledFlexDirection?: flexDirection;
  styledFlexWrap?: flexWrap;
  styledJustifyContent?: justifyContent;
  styledAlignItems?: alignItems;
  styledAlignContent?: alignContent;
}

function Flex({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  children,
}: Props) {
  return (
    <FlexStyles
      styledFlexDirection={flexDirection}
      styledFlexWrap={flexWrap}
      styledJustifyContent={justifyContent}
      styledAlignItems={alignItems}
      styledAlignContent={alignContent}
    >
      {children}
    </FlexStyles>
  );
}

const FlexStyles = styled.div<StyledProps>`
  display: flex;

  ${(props) =>
    props.styledFlexDirection &&
    `flex-direction: ${props.styledFlexDirection}`};
  ${(props) => props.styledFlexWrap && `flex-wrap: ${props.styledFlexWrap}`};
  ${(props) =>
    props.styledJustifyContent &&
    `justify-content: ${props.styledJustifyContent}`};
  ${(props) =>
    props.styledAlignItems && `align-items: ${props.styledAlignItems}`};
  ${(props) =>
    props.styledAlignContent && `align-content: ${props.styledAlignContent}`};
`;

export default Flex;

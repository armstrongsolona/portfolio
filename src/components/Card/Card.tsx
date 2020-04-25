import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import {Color, Font} from '../../utilities/types';
import {COLORS} from '../../utilities/colors';

interface Props {
  title?: string;
  children: React.ReactNode;
}

function Card({title, children}: Props) {
  const titleMarkup = title ? (
    <CardTitle>
      <Heading element="h5" color={Color.Black} font={Font.Regular}>
        {title}
      </Heading>
    </CardTitle>
  ) : null;

  const contentMarkup = <CardContent>{children}</CardContent>;

  return (
    <CardStyles>
      {titleMarkup}
      {contentMarkup}
    </CardStyles>
  );
}

const CardStyles = styled.div`
  box-shadow: 1px 1px 3px ${COLORS.GreyLight};
  background: ${COLORS.White};
  width: 100%;
  text-align: left;
  display: grid;
`;

const CardContent = styled.div`
  @media screen and (max-width: 799px) {
    width: 100%;
    max-width: 49.9375rem;
    padding: 1.4rem 0 0 0;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    padding: 12px;
    width: 100%;
    max-width: 56.25rem;
    margin: auto;
    text-align: left;
  }
`;

const CardTitle = styled.div``;

export default Card;

import React from 'react';
import Heading from '../../../../components/Heading/Heading';
import {Color, Font} from '../../../../utilities/types';
import './Card.css';

interface Props {
  title?: string;
  children: React.ReactNode;
}

function Card({title, children}: Props) {
  const titleMarkup = title ? (
    <div className="CardTitle">
      <Heading element="h3" color={Color.Black} font={Font.Regular}>
        {title}
      </Heading>
    </div>
  ) : null;

  const contentMarkup = <div className="CardContent">{children}</div>;

  return (
    <div className="Card">
      {titleMarkup}
      {contentMarkup}
    </div>
  );
}

export default Card;

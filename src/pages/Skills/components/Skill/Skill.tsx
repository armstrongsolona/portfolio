import React from 'react';
import styled from 'styled-components';
import Heading from '../../../../components/Heading/Heading';
import Image, {ImageSize} from '../../../../components/Image/Image';
import {Color, Font} from '../../../../utilities/types';

interface Props {
  name: string;
}

function Skill({name}: Props) {
  const imgPrefix = '/images/skills/';
  const imgSuffix = '.svg';

  return (
    <SkillStyles>
      <Heading element="h4" color={Color.Black} font={Font.Regular}>
        {name}
      </Heading>
      <Image
        src={`${imgPrefix}${name}${imgSuffix}`}
        alt={name}
        size={ImageSize.Icon}
      />
    </SkillStyles>
  );
}

const SkillStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 3rem 0;
  box-shadow: -1px -1px 3px #eaeaea;
`;

export default Skill;

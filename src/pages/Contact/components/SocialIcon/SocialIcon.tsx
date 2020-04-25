import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../../../utilities/colors';

interface Props {
  children: React.ReactNode;
}

function SocialIcon({children}: Props) {
  return <SocialIconStyles>{children}</SocialIconStyles>;
}

const SocialIconStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ddd;
  margin-right: 8px;
  padding: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.Orange};
  }
`;

export default SocialIcon;

import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {COLORS} from '../../utilities/colors';  

interface Props {
  to: string;
  content: string;
  onClick?(): void;
}

function SkipLink({to, content, onClick}: Props) {

  return (
    <StyledSkipLink>
        <NavLink to={to} exact={true} onClick={onClick}>
            {content}
        </NavLink>
    </StyledSkipLink>
  );
}



const StyledSkipLink = styled.a`
    color: ${COLORS.Black};
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip; rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    font-size: 0.1rem;
    cursor: default;
    margin-bottom: -1rem;
`;

export default SkipLink;

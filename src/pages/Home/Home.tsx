import React from 'react';
import {NavLink} from 'react-router-dom';
import FadeIn from '../../components/FadeIn/FadeIn';
import {TransitionDuration} from '../../utilities/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowCircleRight);
import {COLORS} from '../../utilities/colors';
import styled from 'styled-components';

function Home() {
  return (
    <HomeWrapper>
      <HomeBackground>
        <HomeOverlay>
          <NavLink to="/about">
            <FadeIn duration={TransitionDuration.Quickest}>
              <HomeOverlayQuote>"</HomeOverlayQuote> The only way to do{' '}
            </FadeIn>
            <FadeIn duration={TransitionDuration.Quick}>
              <HomeOverlayMajorEmphasis>great work</HomeOverlayMajorEmphasis>
            </FadeIn>
            <FadeIn duration={TransitionDuration.Slow}>
              is to <HomeOverlayMinorEmphasis>love </HomeOverlayMinorEmphasis>
              what you do
            </FadeIn>
            <FadeIn duration={TransitionDuration.Slower}>
              <HomeOverlayAuthor>- Steve Jobs</HomeOverlayAuthor>
            </FadeIn>
          </NavLink>
        </HomeOverlay>

        <HomeOverlayGo>
          <FadeIn duration={TransitionDuration.Slowest}>
            <NavLink to="/about">
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                size="2x"
                color={COLORS.GreyLight}
              />
            </NavLink>
          </FadeIn>
        </HomeOverlayGo>
      </HomeBackground>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  width: 100%;
  height: calc(100vh + 1px);
  background: url('/images/backgrounds/JemezSpringsNM.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
`;

const HomeBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const HomeOverlay = styled.div`
  font-family: Kalam;
  margin: 0 auto;
  color: ${COLORS.White};
  text-shadow: 1px 2px 4px ${COLORS.Black};

  @media screen and (max-width: 699px) {
    font-size: 1rem;
    text-align: center;
    width: 80%;
  }

  @media screen and (min-width: 700px) {
    font-size: 3rem;
    width: 100%;
    max-width: 30rem;
  }

  a {
    color: ${COLORS.White};
    text-decoration: none;
  }
`;

const HomeOverlayQuote = styled.span`
  font-family: IM Fell French Canon SC;
  vertical-align: middle;

  @media screen and (max-width: 699px) {
    font-size: 3rem;
    line-height: 5rem;
  }

  @media screen and (min-width: 700px) {
    font-size: 8rem;
    line-height: 7rem;
  }
`;

const HomeOverlayGo = styled.div`
  align-self: center;
`;

const HomeOverlayMajorEmphasis = styled.span`
  font-family: Luckiest Guy;
  font-weight: bold;
  text-transform: uppercase;
  color: ${COLORS.Blue};

  @media screen and (max-width: 319px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 320px) and (max-width: 699px) {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
  }

  @media screen and (min-width: 700px) {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
`;

const HomeOverlayMinorEmphasis = styled.span`
  font-family: Dancing Script;
  font-size: 3rem;
  font-weight: bold;
  color: ${COLORS.Orange};
`;

const HomeOverlayAuthor = styled.span`
  font-size: 0.9rem;
  float: right;
`;

export default Home;

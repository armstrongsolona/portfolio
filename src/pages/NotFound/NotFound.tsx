import React from 'react';
import styled from 'styled-components';
import FadeIn from '../../components/FadeIn/FadeIn';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';
import Paragraph, {
  ParagraphWidth,
  ParagraphTextSize,
} from '../../components/Paragraph/Paragraph';
import {TransitionDuration} from '../../utilities/types';
import {ImageSize} from '../../components/Image/Image';

function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundStyles>
        <NotFoundContent>
          <NotFoundContentLeft>
            <FadeIn duration={TransitionDuration.Quicker}>
              <Heading element="h1" size="4rem">
                Oh no!
              </Heading>
              <Paragraph
                width={ParagraphWidth.Wide}
                textSize={ParagraphTextSize.Medium}
                extraSpace
              >
                I didn't build that page.
              </Paragraph>
              <Paragraph
                width={ParagraphWidth.Wide}
                textSize={ParagraphTextSize.Medium}
                extraSpace
              >
                Check out my{' '}
                <a
                  href="/files/SolonaArmstrong-FrontEnd-Resume.pdf"
                  target="_blank"
                >
                  résumé
                </a>{' '}
                or my{' '}
                <a href="/files/SolonaArmstrong-Portfolio.pdf" target="_blank">
                  portfolio
                </a>{' '}
                to see what I have built.
              </Paragraph>
            </FadeIn>
          </NotFoundContentLeft>
          <NotFoundContentRight>
            <FadeIn duration={TransitionDuration.Quick}>
              <Image
                src="/images/backgrounds/undraw_feeling_blue_4b7q.svg"
                alt="Illustration of a woman sitting on a React logo"
                size={ImageSize.Large}
              />
            </FadeIn>
          </NotFoundContentRight>
        </NotFoundContent>
      </NotFoundStyles>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.section`
  margin: 0 auto;
  height: calc(100vh + 1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const NotFoundStyles = styled.div`
  height: 100%;
  width: 80%;
  max-width: 50rem;
`;

const NotFoundContent = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 899px) {
    height: 45rem;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media screen and (min-width: 900px) {
    height: 40rem;
    justify-content: space-between;
  }
`;

const NotFoundContentLeft = styled.div``;
const NotFoundContentRight = styled.div``;

export default NotFound;

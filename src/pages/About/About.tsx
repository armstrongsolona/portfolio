import React, {Component} from 'react';
import styled from 'styled-components';
import Paragraph, {
  ParagraphWidth,
  ParagraphTextSize,
} from '../../components/Paragraph/Paragraph';
import FadeIn from '../../components/FadeIn/FadeIn';
import FadeInScale from '../../components/FadeInScale/FadeInScale';
import Heading from '../../components/Heading/Heading';
import Image, {ImageSize} from '../../components/Image/Image';
import {Color, Font, TransitionDuration} from '../../utilities/types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faPhone,
  faAt,
  faEnvelope,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
library.add(faBriefcase, faPhone, faAt, faEnvelope, faCamera);
import {COLORS} from '../../utilities/colors';

function About() {
  const today = new Date();

  const yearsSinceWebDev = today.getFullYear() - 2009 + 3;
  const yearsSinceSoftware = today.getFullYear() - 2016;
  const yearsSinceNVC = today.getFullYear() - 2005;

  return (
    <AboutStyles>
      <FadeIn duration={TransitionDuration.Quicker}>
        <AboutTop>
          <AboutTopLeft>
            <FadeInScale duration={TransitionDuration.Quick}>
              <Heading color={Color.Blue} element="h1" font={Font.Montez}>
                Solona
              </Heading>
            </FadeInScale>
          </AboutTopLeft>

          <AboutTopRight>
            <FadeInScale duration={TransitionDuration.Quick}>
              <Image
                src="/images/backgrounds/Solona.jpg"
                alt="Solona Armstrong - Frontend Developer"
                size={ImageSize.Medium}
                round
              />
            </FadeInScale>
          </AboutTopRight>
        </AboutTop>
      </FadeIn>
      <FadeIn duration={TransitionDuration.Slowest}>
        <Heading color={Color.Black} element="h2" font={Font.Regular}>
          Frontend Developer
        </Heading>

        <br />
        <br />

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I love what I do.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I've been in web development for a total of {yearsSinceWebDev} years,
          including {yearsSinceSoftware} years in software development. I built
          some of the first websites for fashion companies like La Senza and
          LaSania, back when Flash introductions were cutting edge. I've evolved
          along with the industry and I now specialize in frontend development.
        </Paragraph>

        <Heading element="h3" extraSpace>
          As a developer
        </Heading>
        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I'm kind of obsessed with good UX, not only in my career, but in my
          everyday life, as well. I often think{' '}
          <em>if I designed the world...</em> because when I build something, I
          want it to enhance a user's life instead of adding frustration to it.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I'm meticulous about detail. I'm fastidious both about high quality
          code and pixel-perfection on screen. At the same time, I ship quickly
          and refactor later, if needed.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          Two words: clean code. Sure, it's great to build something amazing,
          but consistent, readable code is also important to me.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          With my background in design, I work well with a design team to
          develop features that solve user pain points, while communicating what
          is and isn't possible with code.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I place importance on accessibility because I believe everyone should
          have a great experience when using an app, regardless of their
          abilities.
        </Paragraph>

        <Heading element="h3" extraSpace>
          As a person
        </Heading>
        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          If I had to choose only one word to describe myself, it would be{' '}
          <a href="https://www.youtube.com/watch?v=GQHGJjsbz5c" target="_blank">
            resourceful
          </a>
          . I pull from my breadth of experience to find creative ways to solve
          problems and I've worked my way around many obstacles.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I'm what they call{' '}
          <a
            href="https://www.hellotalent.com/blog/t-shaped-person-hire/"
            target="_blank"
          >
            T-shaped
          </a>
          . I've dedicated myself to being a master of my craft and never stop
          improving. I'm intensely curious, with a wide array of skills and
          interests that all contribute to my career in one way or another.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          I take after my grandfather: the master of organization. My brain
          naturally creates systems out of chaos.
        </Paragraph>

        <Heading element="h3" extraSpace>
          As a colleague
        </Heading>
        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          Coworkers often tell me how much they love my enthusiasm. I'm a team
          player who believes the end product is more important than my
          individual ego. I like to be useful and will always go the extra mile
          to help someone.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          My communication skills are excellent. I have studied and taught
          empathic communication for {yearsSinceNVC} years. I've taken
          leadership and business communication workshops because good
          connection with people is so important to me.
        </Paragraph>

        <Paragraph
          width={ParagraphWidth.Full}
          textSize={ParagraphTextSize.Medium}
          extraSpace
        >
          Be warned: I make shameless puns and laugh at my own jokes.
        </Paragraph>
      </FadeIn>
    </AboutStyles>
  );
}

const AboutStyles = styled.section`
  margin: 10rem auto 6rem auto;
  width: 80%;
  max-width: 50rem;
`;

const AboutTop = styled.div`
  display: flex;
  align-content: flex-start;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.GreyLight};

  @media screen and (max-width: 699px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }

  @media screen and (min-width: 700px) {
    justify-content: space-between;
  }
`;

const AboutTopLeft = styled.div`
  @media screen and (max-width: 699px) {
    align-self: flex-start;
  }

  @media screen and (min-width: 700px) {
    align-self: flex-end;
  }
`;

const AboutTopRight = styled.div`
  justify-self: flex-end;
`;

export default About;

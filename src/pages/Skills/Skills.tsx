import React from 'react';
import styled from 'styled-components';
import FadeIn from '../../components/FadeIn/FadeIn';
import Skill from './components/Skill/Skill';
import {TransitionDuration} from '../../utilities/types';

function Skills() {
  return (
    <SkillsWrapper>
      <SkillsStyles>
        <FadeIn duration={TransitionDuration.Immediate}>
          <Skill name="React" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quicker}>
          <Skill name="JavaScript" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="ES6" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quickest}>
          <Skill name="TypeScript" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quicker}>
          <Skill name="HTML5" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slow}>
          <Skill name="CSS3" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Sass" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Git" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quicker}>
          <Skill name="Redux" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Redux-Saga" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slow}>
          <Skill name="GraphQL" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Apollo" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slow}>
          <Skill name="Enzyme" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Jest" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slower}>
          <Skill name="Rails" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slowest}>
          <Skill name="MySQL" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slow}>
          <Skill name="Figma" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slower}>
          <Skill name="Sketch" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Slowest}>
          <Skill name="VSCode" />
        </FadeIn>
        <FadeIn duration={TransitionDuration.Quick}>
          <Skill name="Shopify" />
        </FadeIn>
      </SkillsStyles>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.section``;

const SkillsStyles = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin-top: 3rem;

  @media screen and (max-width: 379px) {
    grid-template-columns: 100%;
  }

  @media screen and (min-width: 380px) and (max-width: 799px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 25%);
  }
`;

export default Skills;

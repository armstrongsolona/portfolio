import React, {Component} from 'react';
import Heading from '../../components/Heading/Heading';
import FadeIn from '../../components/FadeIn/FadeIn';
import Skill from './components/Skill/Skill';
import {Color, Font, TransitionDuration} from '../../utilities/types';
import './Skills.css';

interface Props {}
interface State {}

class Skills extends Component<Props, State> {
  render() {
    return (
      <section className="SkillsWrapper">
        <div className="Skills">
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
        </div>
      </section>
    );
  }
}

export default Skills;

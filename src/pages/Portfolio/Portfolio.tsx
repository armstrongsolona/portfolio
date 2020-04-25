import React, {useState, useEffect} from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import Heading from '../../components/Heading/Heading';
import Flex from '../../components/Flex/Flex';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faPhone,
  faAt,
  faEnvelope,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
library.add(faBriefcase, faPhone, faAt, faEnvelope, faCamera);
import {Color, Font, TransitionDuration} from '../../utilities/types';

function Contact() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const determineScreenSize = () => {
    if (document.body.clientWidth >= 800) {
      return false;
    }
    return true;
  };

  const handleResize = () => {
    setIsSmallScreen(determineScreenSize());
  };

  useEffect(() => {
    setIsSmallScreen(determineScreenSize());
    window.addEventListener('resize', handleResize);
  });

  const justifyContent = isSmallScreen ? 'center' : 'flex-start';

  return (
    <section className="ContactWrapper">
      <FadeIn duration={TransitionDuration.Quickest}>
        <Heading color={Color.Black} element="h2" font={Font.Regular}>
          Portfolio
        </Heading>
      </FadeIn>
      <FadeIn duration={TransitionDuration.Quicker}>
        <Flex flexDirection="column">
          <div className="Contact">
            <a
              href="/files/SolonaArmstrong-FrontEnd-Resume.pdf"
              target="_blank"
            >
              Download my resume
            </a>

            <a href="/files/SolonaArmstrong-Portfolio.pdf" target="_blank">
              Download my portfolio
            </a>
          </div>
        </Flex>
      </FadeIn>
    </section>
  );
}

export default Contact;

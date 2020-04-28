import React from 'react';
import styled from 'styled-components';
import FadeIn from '../../components/FadeIn/FadeIn';
import Image from '../../components/Image/Image';
import Flex from '../../components/Flex/Flex';
import SocialIcon from './components/SocialIcon/SocialIcon';
import SpacingContainer from '../../components/SpacingContainer/SpacingContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faPhone,
  faAt,
  faEnvelope,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
library.add(faBriefcase, faPhone, faAt, faEnvelope, faCamera);
import {TransitionDuration} from '../../utilities/types';
import {ImageSize} from '../../components/Image/Image';

function Contact() {
  return (
    <ContactWrapper>
      <ContactStyles>
        <ContactContent>
          <ContactContentLeft>
            <FadeIn duration={TransitionDuration.Quicker}>
              Solona Armstrong
              <SpacingContainer space="regular">
                <Flex flexDirection="column">
                  <Flex alignItems="center" justifyContent="flex-start">
                    <FontAwesomeIcon icon={faPhone} size="1x" />
                    &nbsp;
                    <a href="tel:613-305-3072">613-305-3072</a>
                  </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="flex-start">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                  &nbsp;
                  &#115;&#111;&#108;&#111;&#110;&#097;&#046;&#097;&#114;&#109;&#115;&#116;&#114;&#111;&#110;&#103;&#032;&#064;&#032;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                </Flex>
              </SpacingContainer>
              <SpacingContainer>
                <Flex alignItems="center" justifyContent="flex-start">
                  <FontAwesomeIcon icon={faBriefcase} size="1x" />
                  <a
                    href="/files/SolonaArmstrong-FrontEnd-Resume.pdf"
                    target="_blank"
                  >
                    &nbsp; Download my résumé
                  </a>
                </Flex>
                <Flex alignItems="center" justifyContent="flex-start">
                  <FontAwesomeIcon icon={faCamera} size="1x" />

                  <a
                    href="/files/SolonaArmstrong-Portfolio.pdf"
                    target="_blank"
                  >
                    &nbsp; Download my portfolio
                  </a>
                </Flex>
                <SpacingContainer>
                  <Flex flexDirection="row" justifyContent="flex-start">
                    <a
                      href="https://www.linkedin.com/in/solona"
                      target="_blank"
                      className="none"
                    >
                      <SocialIcon>
                        <Image
                          src="/images/networks/LinkedIn.svg"
                          size={ImageSize.SmallIcon}
                          alt="Solona on LinkedIn"
                        />
                      </SocialIcon>
                    </a>
                    <a
                      href="https://github.com/armstrongsolona"
                      target="_blank"
                      className="none"
                    >
                      <SocialIcon>
                        <Image
                          src="/images/networks/GitHub.svg"
                          size={ImageSize.SmallIcon}
                          alt="Solona on GitHub"
                        />
                      </SocialIcon>
                    </a>
                    <a
                      href="https://twitter.com/solonaarmstrong"
                      target="_blank"
                      className="none"
                    >
                      <SocialIcon>
                        <Image
                          src="/images/networks/Twitter.svg"
                          size={ImageSize.SmallIcon}
                          alt="Solona on Twitter"
                        />
                      </SocialIcon>
                    </a>
                    <a
                      href="https://codepen.io/solona"
                      target="_blank"
                      className="none"
                    >
                      <SocialIcon>
                        <Image
                          src="/images/networks/Codepen.svg"
                          size={ImageSize.SmallIcon}
                          alt="Solona on CodePen"
                        />
                      </SocialIcon>
                    </a>
                  </Flex>
                </SpacingContainer>
              </SpacingContainer>
            </FadeIn>
          </ContactContentLeft>
          <ContactContentRight>
            <FadeIn duration={TransitionDuration.Quick}>
              <Image
                src="/images/backgrounds/undraw_react_y7wq.svg"
                alt="Illustration of a woman sitting on a React logos"
                size={ImageSize.Large}
              />
            </FadeIn>
          </ContactContentRight>
        </ContactContent>
      </ContactStyles>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  width: 80%;
  max-width: 50rem;
  margin: 0 auto;
  height: calc(100vh + 1px);
  display: flex;
  align-items: flex-end;
  align-content: flex-start;
  justify-content: center;
`;

const ContactStyles = styled.div`
  height: 100%;
  width: 100%;
`;

const ContactContent = styled.div`
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

const ContactContentLeft = styled.div``;
const ContactContentRight = styled.div``;

export default Contact;

import React, {Component} from 'react';
import styled from 'styled-components';
import FadeInScale from '../../components/FadeInScale/FadeInScale';
import JobDetails from './components/JobDetails/JobDetails';
import {TransitionDuration} from '../../utilities/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt);
import workHistoryText from '../../data/work-history-text';

interface Props {}
interface State {
  historyText: any;
}

class WorkHistory extends Component<Props, State> {
  state: State = {
    historyText: workHistoryText,
  };

  render() {
    const {historyText} = this.state;
    const jobs: string[] = Object.keys(historyText);

    const jobDetailsMarkup = jobs.map((job: string, index: number) => {
      const imgPrefix = '/images/companies/';

      const buttons =
        job === 'shopify' ? (
          <>
            <a
              href="https://engineering.shopify.com/blogs/engineering/building-data-table-component-react"
              target="_blank"
            >
              Wrote an article for the Shopify Engineering blog{' '}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </>
        ) : null;

      const transitionDuration = [
        TransitionDuration.Quickest,
        TransitionDuration.Quicker,
        TransitionDuration.Quick,
        TransitionDuration.Slow,
        TransitionDuration.Slower,
        TransitionDuration.Slowest,
      ];

      return (
        <WorkHistoryTimeline key={index}>
          <JobDetailsWrapper>
            <FadeInScale duration={transitionDuration[index]}>
              <JobDetails
                current={historyText[job].current}
                companyName={historyText[job].companyName}
                companyDescription={historyText[job].companyDescription}
                className={historyText[job].className}
                role={historyText[job].role}
                imageSrc={`${imgPrefix}${historyText[job].image}`}
                shipped={historyText[job].shipped}
                tech={historyText[job].tech}
                tasks={historyText[job].tasks}
                buttons={buttons}
                key={index}
              />
            </FadeInScale>
          </JobDetailsWrapper>
        </WorkHistoryTimeline>
      );
    });

    return (
      <WorkHistoryWrapper>
        <WorkHistoryStyles>{jobDetailsMarkup}</WorkHistoryStyles>
      </WorkHistoryWrapper>
    );
  }
}

const WorkHistoryWrapper = styled.section`
  margin: 10rem auto 6rem auto;
  width: 80%;
  max-width: 50rem;
`;

const WorkHistoryStyles = styled.div`
  margin-top: 3rem;
`;

const WorkHistoryTimeline = styled.div`
  height: 100%;
`;

const JobDetailsWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default WorkHistory;

import React, {Component} from 'react';
import styled from 'styled-components';
import Image, {ImageSize} from '../../../../components/Image/Image';
import Heading from '../../../../components/Heading/Heading';

interface Props {
  current: boolean;
  companyName: string;
  companyDescription: string;
  className: string;
  role: string;
  tech: string[];
  tasks: string[];
  shipped: string[];
  imageSrc?: string;
  buttons?: React.ReactNode;
}

interface State {}

class JobDetails extends Component<Props, State> {
  render() {
    const {
      current,
      companyName,
      role,
      companyDescription,
      tech,
      tasks,
      shipped,
      imageSrc,
      buttons,
    } = this.props;

    const logoMarkup = imageSrc ? (
      <JobDetailsLogo>
        <Image size={ImageSize.Icon} src={imageSrc} alt={companyName} />
      </JobDetailsLogo>
    ) : null;

    const buttonsMarkup = buttons && <li>{buttons}</li>;

    console.log('shipped.length', shipped.length);

    const shippedMarkup = shipped.length ? (
      <>
        <Heading element="h5">
          {current ? `What I will ship` : 'What I shipped'}
        </Heading>
        <JobDetailsShipped>{shipped.map(this.renderItems)}</JobDetailsShipped>
      </>
    ) : null;

    return (
      <JobDetailsStyles>
        <JobDetailsSummary>
          {logoMarkup}
          <JobDetailsText>
            <JobDetailsRole>{role}</JobDetailsRole>
            <JobDetailsCompanyName>{companyName}</JobDetailsCompanyName>
            <JobDetailsCompanyDescription>
              {companyDescription}
            </JobDetailsCompanyDescription>
            <Heading element="h5">Tech stack</Heading>
            <JobDetailsStack>{tech.map(this.renderItems)}</JobDetailsStack>
            <Heading element="h5">
              {current ? `What I'm doing` : 'What I did'}
            </Heading>
            <JobDetailsTasks>
              {tasks.map(this.renderItems)}
              {buttonsMarkup}
            </JobDetailsTasks>
            {shippedMarkup}
          </JobDetailsText>
        </JobDetailsSummary>
      </JobDetailsStyles>
    );
  }

  renderItems = (item: any, index: number) => {
    return <li key={index}>{item}</li>;
  };
}

const JobDetailsStyles = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px #ddd;
  border: 1px solid #e4e4e4;
  background: white;
`;

const JobDetailsSummary = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 699px) {
    flex-direction: column;
  }

  @media screen and (min-width: 700px) {
  }
`;

const JobDetailsLogo = styled.div`
  flex-grow: 0;
`;

const JobDetailsText = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    margin-left: 0;
  }

  @media screen and (min-width: 700px) {
    margin-left: 1.5rem;
  }
`;

const JobDetailsCompanyName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const JobDetailsCompanyDescription = styled.div`
  font-size: 0.8rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

const JobDetailsRole = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const JobDetailsStack = styled.ul`
  padding-inline-start: 1rem;
`;

const JobDetailsTasks = styled.ul`
  padding-inline-start: 1rem;
`;

const JobDetailsShipped = styled.ul`
  padding-inline-start: 1rem;
`;

export default JobDetails;

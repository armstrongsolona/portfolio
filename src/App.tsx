import React from 'react';
import styled from 'styled-components';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import NavigationLink, {
  NavigationWrapper,
  NavigationList,
  NavigationDesktop,
  NavigationMobile,
} from './components/NavigationLink/NavigationLink';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import WorkHistory from './pages/WorkHistory/WorkHistory';
import Contact from './pages/Contact/Contact';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  const navigationItems = (
    <NavigationList>
      <NavigationLink to="/" content="Solona" />
      <NavigationLink to="/about" content="About" />
      <NavigationLink to="/skills" content="Skills" />
      <NavigationLink to="/work-history" content="Work History" />
      <NavigationLink to="/contact" content="Contact" />
    </NavigationList>
  );

  return (
    <AppStyles>
      <Router>
        <>
          <NavigationWrapper aria-label="Main navigation">
            <NavigationDesktop>{navigationItems}</NavigationDesktop>
            <NavigationMobile>
              <HamburgerMenu>{navigationItems}</HamburgerMenu>
            </NavigationMobile>
          </NavigationWrapper>

          <MainWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work-history" component={WorkHistory} />
            <Route exact path="/contact" component={Contact} />
          </MainWrapper>
        </>
      </Router>
    </AppStyles>
  );
}

const AppStyles = styled.div``;
const MainWrapper = styled.main`
  position: relative;
  z-index: 100;
`;

export default App;

import React, {useState} from 'react';
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
import NotFound from './pages/NotFound/NotFound';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  const [menuOpen, toggleMenuOpen] = useState(false);

  const navigationItems = (
    <NavigationList>
      <NavigationLink
        to="/"
        content="Solona"
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
      <NavigationLink
        to="/about"
        content="About"
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
      <NavigationLink
        to="/skills"
        content="Skills"
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
      <NavigationLink
        to="/work-history"
        content="Work History"
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
      <NavigationLink
        to="/contact"
        content="Contact"
        onClick={() => toggleMenuOpen(!menuOpen)}
      />
    </NavigationList>
  );

  return (
    <AppStyles>
      <Router>
        <>
          <NavigationWrapper aria-label="Main navigation">
            <NavigationDesktop>{navigationItems}</NavigationDesktop>
            <NavigationMobile>
              <HamburgerMenu
                open={menuOpen}
                onClick={() => toggleMenuOpen(!menuOpen)}
              >
                {navigationItems}
              </HamburgerMenu>
            </NavigationMobile>
          </NavigationWrapper>

          <MainWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work-history" component={WorkHistory} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
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

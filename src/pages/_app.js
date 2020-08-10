import React from 'react';

import logo from '../assets/images/logo/chessinations-logo.png';
import logoLight from '../assets/images/logo/chessinations-logo-light.png';
import './../styles/global.scss';
import NavbarCustom from './../components/NavbarCustom';
import { Switch, Route, Router } from './../util/router.js';
import Footer from './../components/Footer';
import './../util/analytics.js';
import { ProvideAuth } from './../util/auth.js';

import IndexPage from './index';
import AboutPage from './about';
import FaqPage from './faq';
import PricingPage from './pricing';
import ContactPage from './contact';
import DashboardPage from './dashboard';
import SettingsPage from './settings';
import PurchasePage from './purchase';
import AuthPage from './auth';
import NotFoundPage from './not-found.js';

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom bg="primary" variant="dark" expand="md" logo={logoLight}></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="Play mashups of chess variants"
            copyright={`© ${new Date().getFullYear()} Chessinations`}
            logo={logo}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

import React from 'react';
import { NavigationLink, Navigation, NavigationItem } from './navigationBarItems';

const NavigationBar = () => (
  <>
    <Navigation>
      <NavigationItem>
        <NavigationLink to="src/components/pages/Home.js" activeStyle>
          Home
        </NavigationLink>
        <NavigationLink to="/components/Calculator" activeStyle>
          Calculator
        </NavigationLink>
        <NavigationLink to="src/components/pages/quote.js" activeStyle>
          Quote
        </NavigationLink>
      </NavigationItem>
    </Navigation>
  </>
);

export default NavigationBar;

import React from 'react';
import { NavigationLink, Navigation, NavigationItem } from './navigationBarItems';

const NavigationBar = () => (
  <>
    <h1>Math Magician</h1>
    <Navigation>
      <NavigationItem>
        <NavigationLink to="src/components/pages/Home.js" activeStyle>
          <h3>Home</h3>
        </NavigationLink>
        <NavigationLink to="/components/Calculator" activeStyle>
          <h3>Calculator</h3>
        </NavigationLink>
        <NavigationLink to="src/components/pages/quote.js" activeStyle>
          <h3>Quote</h3>
        </NavigationLink>
      </NavigationItem>
    </Navigation>
  </>
);

export default NavigationBar;

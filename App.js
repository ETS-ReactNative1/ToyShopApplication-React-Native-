/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Provider from './Navigation/index';
const App = () => {
  fetch('https://toyshopapi.herokuapp.com/api/product')
    .then(response => response.json())
    .then(data => console.log(data));
  // .then(data => console.log(data));

  return <Provider />;
};

export default App;

//App NAvigator is the mainnavigator

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

//Stacks
import AuthStack from './AuthStack';

import AppStack from './AppStack';
import Authcontext from '../Navigation/Context';

export default function Routes() {
  //declaring the state variable to persue the curret user
  [User, SetUser] = useState();

  return (
    <Authcontext.Provider value={{User, SetUser}}>
      <NavigationContainer>
        {User ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Authcontext.Provider>
  );
}

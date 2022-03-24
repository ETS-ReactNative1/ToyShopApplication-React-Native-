import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import authStorage from '../auth/storage';

//Stacks
import AuthStack from './AuthStack';

import AppStack from './AppStack';
import Authcontext from '../Navigation/Context';

export default function Routes() {
  //declaring the state variable to persue the curret user

  let isSubscribed = true;

  [User, SetUser] = useState();

  //Restoring the token
  const restoretoken = async () => {
    const token = await authStorage.gettoken();
    //  console.log(token, 'token from async');

    if (!token) {
      //  console.warn('No Token Avail');
      return;
    }
    //decoding the Token
    SetUser(token);
    // console.log(User, 'from Async Storage');
  };

  useEffect(() => {
    if (isSubscribed) {
      restoretoken();
    }

    return () => (isSubscribed = false);
  }, [User]);

  return (
    <Authcontext.Provider value={{User, SetUser}}>
      <NavigationContainer>
        {User ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Authcontext.Provider>
  );
}

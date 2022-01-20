import React, {useState, useContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native';

//Stacks
import AuthStack from './AuthStack';

import AppStack from './AppStack';
import Authcontext from '../Navigation/Context';

export default function Routes() {
  const {User, SetUser} = useContext(Authcontext);

  const [intializing, setintializing] = useState(true);

  const onAuthStateChanged = User => {
    SetUser(User);
    if (intializing) setintializing(false);
  };

  //from react-native-firebase documentation
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (intializing) return null;

  return (
    <NavigationContainer>
      {User ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

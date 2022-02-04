import React, {createContext, useState} from 'react';

import auth from '@react-native-firebase/auth';

//creating this Authprovider to Enable a sign in and sign up functionality

const Authprovider = ({children}) => {
  //creating a user state
  const [User, SetUser] = useState(null);

  return (
    <Authcontext.Provider
      value={{
        User,
        SetUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;

// wrappig a code in a Provider so that it will be accessible to all the Layers
//which is i between the <AuthStack.Provider>
//in a <AuthStack.Provider /> we have to pass the value { its a data that can be accessible to from anywhere} which gonna be available to all
// the component

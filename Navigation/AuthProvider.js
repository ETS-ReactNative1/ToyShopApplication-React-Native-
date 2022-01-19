import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const Authcontext = createContext();

export function AuthProvider({children}) {
  const [user, Setuser] = useState(null);

  return (
    <Authcontext.Provider
      value={{
        user,
        Setuser,
        login: async (Email, Password) => {
          try {
            await auth().signInWithEmailAndPassword(Email, Password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (Email, Password) => {
          try {
            await auth().createUserWithEmailAndPassword(Email, Password);
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
}

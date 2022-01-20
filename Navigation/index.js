import {View, Text} from 'react-native';
import React from 'react';
import Routes from './Routes';
import AuthProvider from './AuthProvider';

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;

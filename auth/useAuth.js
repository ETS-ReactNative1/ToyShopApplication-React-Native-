import {useContext} from 'react';
import AuthContext from '../Navigation/Context';
import authStorage from './storage';
import jwtDecode from 'jwt-decode';

export default useAuth = () => {
  const {User, SetUser} = useContext(AuthContext);

  const login = authtoken => {
    //decoding the Token

    const user = jwtDecode(authtoken.accessToken);

    SetUser(user);

    //Stroing token
    //error : =>  To be Store as String
    authStorage.storetoken(authtoken.toString());
  };

  const logout = () => {
    SetUser(null);
    authStorage.removetoken();
  };

  return {User, logout, login};
};

//todo
//Setup the Four bottom tabs
//Build the HomeScreen Menu
//Add animation in home Screen

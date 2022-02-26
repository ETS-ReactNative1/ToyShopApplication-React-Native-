//using Async Storage to Persiste the user state in Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//storage key (Should not be putting publically, later putting it in .env)
const STORAGE_KEY = '@save_user';

//saving the data

const storetoken = async authtoken => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, authtoken);
    //  console.warn('Token have been saved Successfully');
  } catch (error) {
    //  console.log(error);
  }
};

const getUser = async () => {
  const token = await storetoken();

  if (token) {
    return token;
  } else {
    return null;
  }
};
//Reding the data

const gettoken = async () => {
  try {
    const usertoken = await AsyncStorage.getItem(STORAGE_KEY);
    // console.warn('Fetched the Token Successfully');
    return usertoken;
  } catch (error) {
    // console.log(error);
  }
};

//Removing the Token

const removetoken = async () => {
  try {
    //We only want to remove the user from async storage
    //if we do a clear then it will clear all the Async storege data
    // result in we will also lost the onboarding state data and after logout user will navigate
    //to onbording screen
    //to avoid that we will use AsyncStorage.removeItem(). To remove
    //only user state from async storage

    await AsyncStorage.removeItem(STORAGE_KEY);
    //console.warn('Storage has been cleared successfully');
  } catch (error) {
    //console.log(error);
  }
};

//exporting
export default {
  getUser,
  storetoken,
  gettoken,
  removetoken,
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Provider from './Navigation/index';
import getitem from './api/getitems';

const App = () => {
  //Storing user

  const [data, Setdata] = useState();

  useEffect(() => {
    pulldata();
    //console.log(Constants.systemFonts, 'From expo');
  }, []);

  const pulldata = async () => {
    try {
      const response = await getitem.gettoysdata();
      //console.log(response.data);
      Setdata(response.data);
      console.log('Data featched Successfully');
      
    } catch (error) {
      console.log(error);
    }
  };

  return <Provider />;
};

export default App;

//App NAvigator is the mainnavigator

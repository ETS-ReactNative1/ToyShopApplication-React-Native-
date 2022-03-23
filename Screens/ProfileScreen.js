import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomHeader from '../Components/CustomHeader';
import Screeen from '../Components/Screeen';

export default function ProfileScreen() {
  [arrow, Setarrow] = useState(null);

  useEffect(() => {
    Setarrow(true);
  }, []);

  return (
    <Screeen>
      <View style={styles.container}>
        <CustomHeader screenname="Profile" arrow={arrow} />
      </View>
    </Screeen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

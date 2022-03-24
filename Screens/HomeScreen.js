import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import Screeen from '../Components/Screeen';
import {fonststyle} from '../Config/fontstyles';

export default function HomeScreen({navigation}) {
  return (
    <Screeen>
      <View style={styles.container}>
        <CustomHeader />
      </View>
    </Screeen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

{
  /* <Pressable onPress={() => navigation.navigate('ProductInfo')}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'purple'}}>
  Move
</Text>
</Pressable> */
}

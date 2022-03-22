import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonststyle} from '../Config/fontstyles';
import BackIcon from 'react-native-vector-icons';

export default function CustomHeader({goback, screenname}) {
  console.log({goback});
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logocontainer} onPress={goback}>
        {/* TODO: 
        1 > Name and Back Button 
        2 > if name prop is enable then show LOgo only ontherwise display buttom 
        3> OR Only in the HomeScreen Show Logo
      */}

        {goback == 'true' ? (
          <BackIcon name="arrowleft" />
        ) : (
          <View>
            <Text style={styles.logo}>Animos</Text>
            <Text style={styles.logosub}>Toy Store</Text>
          </View>
        )}
      </TouchableOpacity>
      {screenname ? (
        <View style={{backgroundColor: 'red'}}>
          <Text style={styles.screenname}>{screenname}</Text>
        </View>
      ) : null}

      <TouchableOpacity>
        <View style={styles.cartlogo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'center',

    width: '100%',
    height: '10%',
    paddingHorizontal: 20,
    padding: 10,
  },
  logo: {
    color: '#000',

    fontWeight: 'bold',
    ...fonststyle.heading3,
  },
  logosub: {
    fontSize: 15,
    color: 'orange',
  },
  logocontainer: {
    alignItems: 'flex-start',
    backgroundColor: 'red',
  },
  cartlogo: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  screenname: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

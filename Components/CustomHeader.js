import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonststyle} from '../Config/fontstyles';
import BackIcon from 'react-native-vector-icons';

export default function CustomHeader({arrow, screenname}) {
  console.log(arrow, 'Coming from custo header');

  //The problem isin the Vector icon

  return (
    <View style={styles.container}>
      {(arrow && (
        <TouchableOpacity style={styles.logocontainer}>
          <View>
            <Text style={styles.logo}>Animos arrow</Text>
            <Text style={styles.logosub}>Toy Store</Text>
          </View>
        </TouchableOpacity>
      )) || (
        <TouchableOpacity style={styles.logocontainer}>
          <View>
            <Text style={styles.logo}>Animos</Text>
            <Text style={styles.logosub}>Toy Store</Text>
          </View>
        </TouchableOpacity>
      )}

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

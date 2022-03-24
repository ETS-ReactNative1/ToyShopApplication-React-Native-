import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {fonststyle} from '../Config/fontstyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Userlogo from '../assets/Images/img7.png';

export default function CustomHeader({arrow, screenname}) {
  console.log(arrow, 'Coming from custo header');

  //The problem isin the Vector icon

  return (
    <View style={styles.container}>
      {(arrow && (
        <TouchableOpacity style={styles.logocontainer}>
          <View>
            <Icon name="arrowleft" size={35} color={'#000'} />
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
        <View style={styles.textscreen}>
          <Text style={styles.screenname}>{screenname}</Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          backgroundColor: '#C0EDA6',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Userlogo}
          resizeMode="center"
          style={{height: 40, width: 40}}
        />
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
    //backgroundColor: 'red',
  },
  cartlogo: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  screenname: {
    fontWeight: 'bold',
    ...fonststyle.heading2,
    fontSize: 24,
  },
  textscreen: {},
});

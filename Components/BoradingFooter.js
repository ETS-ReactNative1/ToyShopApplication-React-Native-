import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../Config/ColorPallet';
import CustomeButton from './CustomeButton';
import DotComponent from './DotComponent';
import {useNavigation} from '@react-navigation/native';

//arrow-right
//height and width
const {height, width} = Dimensions.get('window');

export default function BoradingFooter({
  PageData,
  activedot,
  onPress,
  Islastslide,
}) {
  //hooks
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.paginator}>
        {/* Map over the Pages  */}

        {PageData.map((_, index) => {
          return (
            <DotComponent
              key={index.toString()}
              index={index}
              activedot={activedot}
            />
          );
        })}
      </View>
      {Islastslide === 3 ? (
        <CustomeButton
          extrastyle={styles.btnstyle}
          title="Get Started"
          textstyle={styles.btntextstyle}
          onPress={() => navigation.replace('Login')}
        />
      ) : (
        <View style={styles.icon}>
          <Icon name="arrow-right" size={35} color="#000" onPress={onPress} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    bottom: 0,
    position: 'absolute',
    //  backgroundColor: 'red',
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center',
  },
  paginator: {
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 15,
    //  backgroundColor: 'yellow',
    alignItems: 'center',
  },
  btnstyle: {
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: '#548CFF',
    height: '150%',
    width: '45%',
    marginHorizontal: 10,
  },
  btntextstyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.secondary,
  },
});

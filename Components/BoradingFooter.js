import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import DotComponent from './DotComponent';

//arrow-right
//height and width
const {height, width} = Dimensions.get('window');

export default function BoradingFooter({PageData, activedot, onPress, skip}) {
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
      <View style={styles.icon}>
        <Icon name="arrow-right" size={40} color="#000" onPress={onPress} />
      </View>
      {/* <TouchableOpacity onPress={skip}>
        <Text>Skip</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    bottom: 0,
    position: 'absolute',

    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  paginator: {
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 15,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});

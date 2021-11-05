import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  event,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BoardingSlides from '../Components/BoardingSlides';

const {height, width} = Dimensions.get('window');

const size = width * 0.5;

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

export default function Onboardingscreen({navigation}) {
  const translateX = useSharedValue(0);

  const Scrollhandler = useAnimatedScrollHandler(event => {
    //Store the Content offset Value
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToAlignment
        style={{flex: 1, backgroundColor: 'red'}}
        pagingEnabled
        horizontal>
        <View style={styles.page}>
          <View style={styles.square} />
        </View>

        <View style={styles.page}>
          <View style={styles.square} />
        </View>
        <View style={styles.page}>
          <View style={styles.square} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  square: {
    height: size,
    width: size,
    backgroundColor: 'rgba(0,0,256,0.9)',
    borderRadius: 100,
  },
});

//PRev

// {Words.map((title, index) => {
//   return (
//     <BoardingSlides
//       key={index.toString()}
//       title={title}
//       index={index}
//       translateX={translateX}
//     />
//   );
// })
//}

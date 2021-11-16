import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {PageData} from '../Data/Onboarddata';

import BoardingSlides from '../Components/BoardingSlides';

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

//original Eco-Toys
//Amazing Toys Design
//Favriote Impression
//Magical character

export default function Onboardingscreen({navigation}) {
  //Storing the TranslateX Value in the Shared Value Bcz we need this valur for Animations

  const translateX = useSharedValue(0);

  //Scroll handler to get the Scrolling event on Horizontal axis
  const ScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={ScrollHandler}
        showsHorizontalScrollIndicator={false}
        snapToAlignment
        style={{flex: 1}}
        pagingEnabled
        horizontal>
        {PageData.map((item, index) => {
          return (
            <BoardingSlides
              key={index.toString()}
              index={index}
              translateX={translateX}
              Page={item}
            />
          );
        })}
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
});

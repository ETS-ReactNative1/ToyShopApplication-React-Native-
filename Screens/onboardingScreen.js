import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import BoardingSlides from '../Components/BoardingSlides';

const {height, width} = Dimensions.get('window');

const w = Dimensions.get('screen').width;

const size = width * 0.5;

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

export default function Onboardingscreen({navigation}) {
  //State for Scrollvisible
  const [isScrollVisible, setScrollVisible] = useState(false);

  const ScrollX = useSharedValue(0);

  //Style Reanimated
  const AnimatedStyleScroll = useAnimatedStyle(() => {
    return {
      transform: [{translateX: ScrollX.value}],
    };
  });

  //Scale Animation

  //useEffect

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToAlignment
        style={{flex: 1}}
        pagingEnabled
        horizontal>
        {Words.map((title, index) => {
          return (
            <BoardingSlides
              key={index.toString()}
              title={title}
              index={index}
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

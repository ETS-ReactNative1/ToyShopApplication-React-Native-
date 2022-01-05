import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {PageData} from '../Data/Onboarddata';

import BoardingSlides from '../Components/BoardingSlides';
import BoradingFooter from '../Components/BoradingFooter';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

export default function Onboardingscreen({navigation}) {
  //Storing the TranslateX Value in the Shared Value Bcz we need this valur for Animations

  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / WIDTH);
  });

  //Scroll handler to get the Scrolling event on Horizontal axis
  const ScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const scrollref = useAnimatedRef();

  const handlepress = useCallback(() => {
    if (activeIndex.value === PageData.length - 1) return;

    scrollref.current?.scrollTo({x: WIDTH * (activeIndex.value + 1)});
  }, []);

  const skip = useCallback(() => {
    scrollref.current?.scrollTo({x: WIDTH * (activeIndex.value + 3)});
  });

  return (
    <View style={[styles.wrapper]}>
      <Animated.ScrollView
        ref={scrollref}
        scrollEventThrottle={16}
        onScroll={ScrollHandler}
        showsHorizontalScrollIndicator={false}
        snapToAlignment
        pagingEnabled
        horizontal>
        {PageData.map((item, index) => {
          return (
            <BoardingSlides
              key={index.toString()}
              index={index}
              translateX={translateX}
              Page={item}
              skipbtn={skip}
            />
          );
        })}
      </Animated.ScrollView>
      {/* footer Component */}

      <BoradingFooter
        PageData={PageData}
        activedot={activeIndex}
        onPress={handlepress}
        skip={skip}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: HEIGHT,
    backgroundColor: 'pink',
    flex: 1,
  },
});

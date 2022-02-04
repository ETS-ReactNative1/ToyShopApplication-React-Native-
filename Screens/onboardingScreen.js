import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Settings} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  event,
} from 'react-native-reanimated';
import {PageData} from '../Data/Onboarddata';

import BoardingSlides from '../Components/BoardingSlides';
import BoradingFooter from '../Components/BoradingFooter';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

//Array for the Data

export default function Onboardingscreen({navigation}) {
  //to set he last slide so that we can do a conditional rendering of the get started button
  const [Islastslide, SetIslastslide] = useState(0);

  //Storing the TranslateX Value in the Shared Value Bcz we need this valur for Animations

  const translateX = useSharedValue(0);

  //getting the active index
  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / WIDTH);
  });

  //Scroll handler to get the Scrolling event on Horizontal axis
  const ScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  //to get the last slide index and set with the help of setter
  const getlastslideindex = e => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / WIDTH);
    console.log('This is the cirrentindex of time  2', currentIndex);
    //setting the last index
    SetIslastslide(currentIndex);
  };

  const scrollref = useAnimatedRef();

  const handlepress = useCallback(() => {
    if (activeIndex.value === PageData.length - 2) {
      scrollref.current?.scrollTo({x: WIDTH * (activeIndex.value + 1)});
      SetIslastslide(3);
      return;
    } else {
      scrollref.current?.scrollTo({x: WIDTH * (activeIndex.value + 1)});
    }
  }, []);

  const skip = useCallback(() => {
    scrollref.current?.scrollTo({x: WIDTH * (activeIndex.value + 3)});
    const lastslideindex = PageData.length - 1;
    SetIslastslide(lastslideindex);
  });

  return (
    <View style={[styles.wrapper]}>
      <Animated.ScrollView
        ref={scrollref}
        scrollEventThrottle={16}
        onMomentumScrollEnd={getlastslideindex}
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
        Islastslide={Islastslide}
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

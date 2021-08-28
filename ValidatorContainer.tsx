import React, {useEffect, useState} from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const easing = Easing.inOut(Easing.ease);

const ValidatorContainer = () => {
  const angle = useSharedValue(0);
  // const colors = useSharedValue(['#9E23FF', '#2993F4']);

  const animatedProps = useAnimatedProps(() => {
    return {
      angle: angle.value,
    };
  });

  useEffect(() => {
    angle.value = withRepeat(
      withTiming(360, {
        duration: 1500,
        easing,
      }),
      -1,
    );
  }, []);

  return (
    <>
      <AnimatedLinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 1]}
        colors={['#9E23FF', '#2993F4']}
        style={{borderRadius: 12, padding: 2}}
        useAngle={true}
        animatedProps={animatedProps}>
        <View backgroundColor={'black'} padding-10 style={{borderRadius: 12}}>
          <Text white margin-10>
            Holi
          </Text>
        </View>
      </AnimatedLinearGradient>
    </>
  );
};

export default ValidatorContainer;

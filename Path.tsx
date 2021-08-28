import React, {useEffect, useState} from 'react';
import {
  addArc,
  addCurve,
  close,
  createPath,
  curveLines,
  interpolatePath,
  parse,
  serialize,
} from 'react-native-redash';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {Text} from 'react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface IPathTest {
  theta: Animated.SharedValue<number>;
  r: number;
}

const PathTest = ({theta, r}: IPathTest) => {
  const SIZE = 50;
  const strokeWidth = 3;
  const PI = Math.PI;
  const radius = r - strokeWidth / 2;
  const circumference = radius * 2 * PI;

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: theta.value * radius,
    };
  });

  return (
    <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none">
      <Path
        opacity={0.3}
        d="M47.085 24.5a22.5 22.5 0 11-45.002 0 22.5 22.5 0 0145.002 0h0z"
        stroke="#4F4F4F"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.202 17.614a6.593 6.593 0 01-6.617 6.615 6.594 6.594 0 01-6.618-6.615A6.592 6.592 0 0124.585 11a6.592 6.592 0 016.617 6.614zM24.585 36c-5.422 0-10-.881-10-4.281 0-3.402 4.606-4.252 10-4.252 5.423 0 10 .882 10 4.282 0 3.401-4.607 4.251-10 4.251z"
        fill="#D9D9D9"
        opacity={0.3}
      />
      <AnimatedCircle
        cx={'50%'}
        cy={'50%'}
        fill="transparent"
        stroke="url(#paint0_linear)"
        r={radius}
        strokeDasharray={`${circumference}, ${circumference}`}
        strokeWidth={strokeWidth}
        transform={`translate(0, ${SIZE}) rotate(270)`}
        animatedProps={animatedProps}
        // {...{ strokeWidth }}
      />
      {/* <Path */}
      {/*   stroke="url(#paint0_linear)" */}
      {/*   strokeWidth={3} */}
      {/*   strokeLinecap="round" */}
      {/* /> */}
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0.584709}
          y1={0.500003}
          x2={29.9304}
          y2={58.0175}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2993F4" />
          <Stop offset={1} stopColor="#9E23FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );

  // return <MyAnimatedComponent animatedProps={animatedProps} />;
};

export default PathTest;

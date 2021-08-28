/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PathTest from './Path';
import Chats from './ScrollEffect';
import {
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {canvas2Polar} from 'react-native-redash';
import ValidatorContainer from './ValidatorContainer';
import {Text} from 'react-native-ui-lib';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#1a1a1a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const MAX_STEPS = 8;

  const [currentStep, setCurrentStep] = useState(1);

  const r = 25;
  const completeCircunference = Math.PI * 2;
  const theta = useSharedValue(completeCircunference);

  const changeTheta = () => {
    console.log(completeCircunference);
    console.log(MAX_STEPS / (currentStep * completeCircunference));
    theta.value = withSpring(
      completeCircunference - (currentStep * completeCircunference) / MAX_STEPS,
    );
    setCurrentStep(currentStep + 1);
    // theta.value = withTiming(canvas2Polar({x: 10, y: 60}, {x: r, y: r}).theta);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <PathTest theta={theta} r={r} />
        <TouchableOpacity onPress={changeTheta}>
          <Text color={'white'}>Paso siguiente</Text>
        </TouchableOpacity>
      </View>
      <View style={[backgroundStyle, {width: '100%'}]}>
        <ValidatorContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

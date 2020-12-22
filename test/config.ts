import * as ReactNative from 'react-native';

jest.useFakeTimers();
jest.mock('expo-app-loading', () => jest.fn());
jest.mock('@react-native-async-storage/async-storage', () => jest.fn());
jest.mock('@expo-google-fonts/raleway', () => ({
  useFonts: jest.fn(() => [true]),
}));

const animationMock = {
  start: jest.fn(),
};

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      // Mock out properties of an already mocked export
      LayoutAnimation: {
        ...ReactNative.LayoutAnimation,
        configureNext: jest.fn(),
      },
      Animated: {
        Value: jest.fn(),
        View: ReactNative.View,
        stagger: jest.fn(() => animationMock),
        parallel: jest.fn(() => animationMock),
        timing: jest.fn(() => animationMock),
        start: jest.fn(() => animationMock),
      }
    },
    ReactNative,
  );
});

import * as ReactNative from 'react-native';

jest.useFakeTimers();
jest.mock('@react-native-async-storage/async-storage', () => jest.fn());
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
        View: ReactNative.View
      }
    },
    ReactNative,
  );
});

const AppStyle = {
  white: '#fff',

  // ORANGES
  orange: '#FFBE40',
  lightOrange: '#FFD480',

  // GREYS
  grey: '#E3E3E3',
  lightGrey: '#F3F3F3',

  // GREEN
  green: '#29C925',
  lightGreen: '#44FF4a',

  // BLUE
  blue: '#40BAFF',
  lightBlue: '#65C8FF',

  // RED
  red: '#BB1919',
  lightRed: '#FF4040',

  orange_2: '#FFBE40',

  primary: '#FF9C40',
  secondary: '#40BAFF',

  easy: '#4DCC4B',
  medium: '#FFBE40',
  hard: '#FF5740',

  // FONT
  font: 'Raleway_400Regular',
  // FONT BOLD
  fontBold: 'Raleway_700Bold',
};

const Gradients: { [color: string]: [string, string] } = {
  // GREEN GRADIANT
  easy: [AppStyle.lightGreen, AppStyle.green],
  green: [AppStyle.lightGreen, AppStyle.green],
  // ORANGE
  medium: [AppStyle.lightOrange, AppStyle.orange],
  orange: [AppStyle.lightOrange, AppStyle.orange],
  // RED
  hard: [AppStyle.lightRed, AppStyle.red],
  red: [AppStyle.lightRed, AppStyle.red],
  // GREY
  grey: [AppStyle.lightGrey, AppStyle.grey],
  default: [AppStyle.lightGrey, AppStyle.grey],
  // BLUE
  blue: [AppStyle.lightBlue, AppStyle.blue],
};

// Includes null opertor
const getGradient = (color?: string): [string, string] => {
  if (color && ['easy', 'green', 'medium', 'orange', 'hard', 'red', 'grey', 'default', 'blue'].includes(color)) {
    return Gradients[color];
  } else {
    return Gradients.default;
  }
};

export { Gradients, getGradient };
export default AppStyle;

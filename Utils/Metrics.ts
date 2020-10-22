import {Dimensions} from 'react-native';

export default {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  vw: (unit: number): number => (unit * Dimensions.get('window').width) / 100,
  vh: (unit: number): number => (unit * Dimensions.get('window').height) / 100,
};
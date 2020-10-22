import React from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import metrics from '../Utils/Metrics';

interface ImageBoxProps {
  onBoxPress?: any;
}

const ImageBox: React.FC<ImageBoxProps> = ({children,onBoxPress}) => {
  return (
    <Pressable onPress={onBoxPress} style={styles.box}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: metrics.vh(16),
    margin: metrics.vh(1),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: metrics.vw(26)
  },

  
});

export default ImageBox;

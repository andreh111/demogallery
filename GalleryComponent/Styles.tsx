import {StyleSheet} from 'react-native';
import React from 'react';

import Metrics from '../Utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    width: Metrics.vw(100),
    justifyContent: 'space-between',
  },
  close: {
    margin: 8,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    height: Metrics.vh(16),
    margin: Metrics.vh(1),
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
    flexBasis: Metrics.vw(26),
  },
});

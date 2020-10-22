/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import MainGalleryContainer from './GalleryComponent/MainGalleryContainer';
import metrics from './Utils/Metrics'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,justifyContent:'flex-start',top: metrics.vh(5)}}>
        <MainGalleryContainer />
      </View>
      
    </SafeAreaView>
    
  );
};



export default App;

import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../Utils/Metrics';
import { styles } from './Styles';

interface ImageBoxProps {
  onBoxPress?: any;
  image: object;
  onRemovePhoto: Function;
}

const ImageBoxContainer: React.FC<ImageBoxProps> = ({
  image,
  onRemovePhoto
}) => {
  return (
    <View style={styles.box}>
      {image ? (
        <ImageBackground
          source={image}
          style={{width: '100%', height: metrics.vh(16)}}>
          <TouchableOpacity
            onPress={onRemovePhoto}
            style={styles.close}>
            <Icon color="#FD6A02" name="close-outline" size={30} />
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="image-outline" size={30} />
        </View>
      )}
    </View>
  );
};

export default ImageBoxContainer;

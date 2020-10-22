import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import metrics from '../Utils/Metrics';
import ImageBox from './ImageBox';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import uuidv4 from '../Utils/UUID';

interface MainGalleryContainerProps {}

interface ImageProps {
  id: string;
  image: object;
}

const MainGalleryContainer: React.FC<MainGalleryContainerProps> = () => {

  const [boxes] = React.useState([1, 2, 3, 4, 5]);
  const [images, setImages] = React.useState<Array<ImageProps>>([]);

  const selectImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const image = {uri: response.uri};
        if (images.length >= 5) {
          Alert.alert('', "You can't select more than 5 photos");
        } else {
          setImages((previousImages) => [
            ...previousImages,
            {
              id: uuidv4(),
              image,
            },
          ]);
        }
      }
    });
  };

  const handleRemovePhoto = (id: string) => {
    setImages(images.filter((photo) => photo.id !== id));
  };

  return (
    <View
      style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0}}>
      <ImageBox onBoxPress={() => selectImage()}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="add" size={30} />
          <Text style={{fontSize: 20, textAlign: 'center'}}>Add Photos</Text>
        </View>
      </ImageBox>
      {boxes.map((box, index) => {
        return (
          <ImageBox key={index}>
            {images[index] ? (
              <ImageBackground
                source={images[index].image}
                style={{width: '100%', height: metrics.vh(16)}}>
                <TouchableOpacity
                  onPress={() => handleRemovePhoto(images[index].id)}
                  style={styles.close}>
                  <Icon color="#FD6A02" name="close-outline" size={30} />
                </TouchableOpacity>
              </ImageBackground>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="image-outline" size={30} />
              </View>
            )}
          </ImageBox>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: metrics.vw(100),
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
});

export default MainGalleryContainer;

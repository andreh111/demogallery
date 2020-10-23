import React from 'react';
import {Alert, View} from 'react-native';
import ImageBox from './ImageBoxContainer';
import useImage from '../hooks/useImage';
import PickImageCard from './PickImageCard';

interface MainGalleryContainerProps {}

const MainGalleryContainer: React.FC<MainGalleryContainerProps> = () => {
  const [images,handleRemovePhoto,selectImage] = useImage();
  const [imageItems] = React.useState([1, 2, 3, 4, 5]);

  return (
    <View
      style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0}}>
      <PickImageCard onPickImage={()=>selectImage()}/>
      {imageItems.map((image, index) => {
        return (
          <ImageBox
            key={index}
            image={images[index] ? images[index].image: null}
            onRemovePhoto={()=>handleRemovePhoto(images[index].id)}
          />
        );
      })}
    </View>
  );
};
export default MainGalleryContainer;

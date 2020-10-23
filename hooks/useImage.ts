import { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { Alert } from 'react-native';
import uuidv4 from '../Utils/UUID';

interface ImageProps {
    id: string;
    image: object;
}

export default () => {
    const [images, setImages] = useState<Array<ImageProps>>([]);

    const selectImage = () => {
        ImagePicker.showImagePicker((response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const image = { uri: response.uri };
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

    return [images,handleRemovePhoto,selectImage];
}
import React from 'react';
import {Pressable, Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles}from './Styles';

interface PickImageCardProps {
    onPickImage: Function;
}

const PickImageCard:React.FC<PickImageCardProps> = ({onPickImage}) => {
  return (
    <Pressable style={styles.box} onPress={onPickImage}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="add" size={30} />
        <Text style={{fontSize: 20, textAlign: 'center'}}>Add Photos</Text>
      </View>
    </Pressable>
  );
}

export default PickImageCard;
